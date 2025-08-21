import { Module } from "@nestjs/common";
import { PrismaService } from "src/infraestructure/nestjs/prisma/prisma.service";

import { DispositivosController } from "src/adapters/in/nestjs/http/dispositivos/dispositivos.controller";

import { PrismaDispositivosRepository } from "src/adapters/out/nestjs/prisma/prisma-dispositivos.repository";

import { GetDispositivosService } from "src/application/nestjs/dipositivos/get-dispositivos.service";
import { CreateDispositivosService } from "src/application/nestjs/dipositivos/create-dispositivos.service";
import { UpdateDispositivosService } from "src/application/nestjs/dipositivos/update-dispositivos.service";
import { DeleteDispositivosService } from "src/application/nestjs/dipositivos/delete-dispositivos.service";

import { DISPOSITIVOS_REPOSITORY_PORT } from "src/ports/out/nestjs/dipositivos/dispositivos-repository.port";
import { GET_DISPOSITIVOS_PORT } from "src/ports/in/nestjs/dipositivos/get-dispositivos.port";
import { CREATE_DISPOSITIVOS_PORT } from "src/ports/in/nestjs/dipositivos/create-dispositivos.port";
import { UPDATE_DISPOSITIVOS_PORT } from "src/ports/in/nestjs/dipositivos/update-dispositivos.port";
import { DELETE_DISPOSITIVOS_PORT } from "src/ports/in/nestjs/dipositivos/delete-dipositivos.port";

@Module({
    imports: [],
    controllers: [DispositivosController],
    providers: [
        PrismaService,
        { provide: DISPOSITIVOS_REPOSITORY_PORT, useClass: PrismaDispositivosRepository },
        { provide: GET_DISPOSITIVOS_PORT, useClass: GetDispositivosService },
        { provide: CREATE_DISPOSITIVOS_PORT, useClass: CreateDispositivosService} ,
        { provide: UPDATE_DISPOSITIVOS_PORT, useClass: UpdateDispositivosService },
        { provide: DELETE_DISPOSITIVOS_PORT, useClass: DeleteDispositivosService }
    ],
})

export class DispositivosModule {}