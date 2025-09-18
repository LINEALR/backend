import { NestFactory } from '@nestjs/core';
import { Module } from '@nestjs/common';
import * as express from 'express';
import { appRouter, AppRouter } from './app.router';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { DomainExeptionFilter } from './infraestructure/prisma/mysql/filters/domain-exeption.filter';
import { ValidationPipe } from '@nestjs/common';

@Module({})
class AppModule{}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.useGlobalFilters(new DomainExeptionFilter);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  )

app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext: () => ({}),
  })
);

  await app.listen(process.env.PORT ?? 3001);
  console.log("NestJS + tRPC escuchando en http://localhost:3001/trpc");
}
bootstrap();
