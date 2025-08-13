import { Module } from '@nestjs/common';
import { ColaboradorController } from 'src/adapters/in/colaborador.controller';
import { ColaboradorService } from 'src/application/colaboradores/colaboradoresCRUD.service';
import { PrismaService } from 'src/infraestructure/prisma/prisma.service';
import { ColaboradorRepositoryImpl } from 'src/adapters/out/colaboradorRepository.impl';

@Module({
  controllers: [ColaboradorController],
  providers: [ColaboradorService, ColaboradorRepositoryImpl, PrismaService],
})
export class ColaboradorModule {}
