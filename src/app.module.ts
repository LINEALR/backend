import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './infraestructure/prisma/prisma.module';
import { PrismaService } from './infraestructure/prisma/prisma.service';
import { ColaboradoresModule } from './domain/colaboradores/colaboradores.module';

@Module({
  imports: [ColaboradoresModule],
  controllers: [AppController],
  providers: [AppService],
})

/*@Module({
  imports: [PrismaModule],
  controllers: [ColaboradorController],
  providers: [PrismaService],
})*/

export class AppModule {}
