import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infraestructure/prisma/prisma.service';

import { ColaboradoresController } from 'src/adapters/in/http/colaboradores.controller';

import { PrismaColaboradoresRepository } from 'src/adapters/out/prisma/prisma-colaborador.repository';

import { CreateColaboradoresService } from 'src/application/colaboradores/create-colaboradores.services';
import { COLABORADORES_REPOSITORY_PORT } from 'src/ports/out/colaboradores/colaborador-repository.port';
import { GET_COLABORADORES_PORT } from 'src/ports/in/colaboradores/get-colababoradores.port';
import { CREATE_COLABORADORES_PORT } from 'src/ports/in/colaboradores/create-colaboradores.port';

import { GetColaboradoresService } from 'src/application/colaboradores/get-colaboradores.service';
@Module({
  imports: [],
  controllers: [ColaboradoresController],
  providers: [
    PrismaService,
    { provide: COLABORADORES_REPOSITORY_PORT, useClass: PrismaColaboradoresRepository },
    { provide: CREATE_COLABORADORES_PORT, useClass: CreateColaboradoresService },
    { provide: GET_COLABORADORES_PORT, useClass: GetColaboradoresService }
  ],
})
export class ColaboradoresModule { }
