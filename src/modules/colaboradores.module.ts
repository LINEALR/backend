import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infraestructure/nestjs/prisma/prisma.service';

import { ColaboradoresController } from 'src/adapters/in/nestjs/http/colaboradores.controller';

import { PrismaColaboradoresRepository } from 'src/adapters/out/nestjs/prisma/prisma-colaborador.repository';
import { COLABORADORES_REPOSITORY_PORT } from 'src/ports/out/nestjs/colaboradores/colaborador-repository.port';
import { CreateColaboradoresService } from 'src/application/nestjs/colaboradores/create-colaboradores.service';
import { CREATE_COLABORADORES_PORT } from 'src/ports/in/nestjs/colaboradores/create-colaboradores.port';
import { GET_COLABORADORES_PORT } from 'src/ports/in/nestjs/colaboradores/get-colababoradores.port';
import { GetColaboradoresService } from 'src/application/nestjs/colaboradores/get-colaboradores.service';
import { GetAllColaboradoresService } from 'src/application/nestjs/colaboradores/get-all-colaboradores.service';
import { GET_ALL_COLABORADORES_PORT } from 'src/ports/in/nestjs/colaboradores/get-all-colaboradores.ports';
import { UpdateColaboradoresService } from 'src/application/nestjs/colaboradores/update-colaboradore.service';
import { UPDATE_COLABORADORES_PORT } from 'src/ports/in/nestjs/colaboradores/update-colaboradores.port';
import { DeleteColaboradoresService } from 'src/application/nestjs/colaboradores/delete-colaboradores.service';
import { DELETE_COLABORADORES_PORT } from 'src/ports/in/nestjs/colaboradores/delete-colaboradores.port';

@Module({
  imports: [],
  controllers: [ColaboradoresController],
  providers: [
    PrismaService,
    { provide: COLABORADORES_REPOSITORY_PORT, useClass: PrismaColaboradoresRepository },
    { provide: GET_COLABORADORES_PORT, useClass: GetColaboradoresService },
    { provide: GET_ALL_COLABORADORES_PORT, useClass: GetAllColaboradoresService},
    { provide: CREATE_COLABORADORES_PORT, useClass: CreateColaboradoresService },
    { provide: UPDATE_COLABORADORES_PORT, useClass: UpdateColaboradoresService},
    { provide: DELETE_COLABORADORES_PORT, useClass: DeleteColaboradoresService}
  ],
})

export class ColaboradoresModule {}
