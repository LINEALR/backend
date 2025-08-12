import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './infraestructure/prisma/prisma.module';
import { ColaboradorController } from './adapters/in/colaborador.controller';
import { ColaboradorRepositoryImpl } from './adapters/out/colaboradorRepository.impl';
import { PrismaService } from './infraestructure/prisma/prisma.service';
import { ColaboradorModule } from './domain/colaboradores/colaboradores.module';

@Module({
  imports: [ColaboradorModule],
  controllers: [AppController],
  providers: [AppService],
})

/*@Module({
  imports: [PrismaModule],
  controllers: [ColaboradorController],
  providers: [PrismaService],
})*/

export class AppModule {}
