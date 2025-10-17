import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infraestructure/prisma/postgresql/prisma.service';

import { ColaboradoresController } from 'src/adapters/in/http/colaboradores/colaboradores.controller';

import { PrismaColaboradoresRepository } from 'src/adapters/out/prisma/prisma-colaborador.repository';

import { GetColaboradoresService } from 'src/application/colaboradores/get-colaboradores.service';
import { CreateColaboradoresService } from 'src/application/colaboradores/create-colaboradores.service';
import { UpdateColaboradoresService } from 'src/application/colaboradores/update-colaboradore.service';
import { DeleteColaboradoresService } from 'src/application/colaboradores/delete-colaboradores.service';

import { COLABORADORES_REPOSITORY_PORT } from 'src/ports/out/colaborador-repository.port';
import { GET_COLABORADORES_PORT } from 'src/ports/in/colaboradores/get-colababoradores.port';
import { CREATE_COLABORADORES_PORT } from 'src/ports/in/colaboradores/create-colaboradores.port';
import { UPDATE_COLABORADORES_PORT } from 'src/ports/in/colaboradores/update-colaboradores.port';
import { DELETE_COLABORADORES_PORT } from 'src/ports/in/colaboradores/delete-colaboradores.port';

@Module({
  imports: [],
  controllers: [ColaboradoresController],
  providers: [
    PrismaService,
    { provide: COLABORADORES_REPOSITORY_PORT, useClass: PrismaColaboradoresRepository },
    { provide: GET_COLABORADORES_PORT, useClass: GetColaboradoresService },
    { provide: CREATE_COLABORADORES_PORT, useClass: CreateColaboradoresService },
    { provide: UPDATE_COLABORADORES_PORT, useClass: UpdateColaboradoresService },
    { provide: DELETE_COLABORADORES_PORT, useClass: DeleteColaboradoresService }
  ],
  exports: [COLABORADORES_REPOSITORY_PORT]
})

export class ColaboradoresModule {}
