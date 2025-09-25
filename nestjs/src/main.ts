import { NestFactory } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { AppModule } from './app.module';
import * as express from 'express';
import { DomainExeptionFilter } from './infraestructure/prisma/mysql/filters/domain-exeption.filter';
import { ValidationPipe } from '@nestjs/common';

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

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
