import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './infraestructure/nestjs/prisma/prisma.module';
import { PrismaService } from './infraestructure/nestjs/prisma/prisma.service';
import { ColaboradoresModule } from './modules/colaboradores.module';

@Module({
  imports: [
    CacheModule.register({
      isGlobal : true,
      ttl: 5,
    }),
    ColaboradoresModule],
  controllers: [AppController],
  providers: [AppService],
})

/*@Module({
  imports: [PrismaModule],
  controllers: [ColaboradorController],
  providers: [PrismaService],
})*/

export class AppModule {}
