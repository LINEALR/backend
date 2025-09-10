import { Module } from "@nestjs/common";
import { PrismaService } from "src/infraestructure/prisma/postgresql/prisma.service";

import { DispositivosController } from "src/adapters/in/http/dispositivos/dispositivos.controller";

import { PrismaDispositivosRepository } from "src/adapters/out/prisma/prisma-dispositivos.repository";

import { GetDispositivosService } from "src/application/dipositivos/get-dispositivos.service";
import { CreateDispositivosService } from "src/application/dipositivos/create-dispositivos.service";
import { UpdateDispositivosService } from "src/application/dipositivos/update-dispositivos.service";
import { DeleteDispositivosService } from "src/application/dipositivos/delete-dispositivos.service";

import { DISPOSITIVOS_REPOSITORY_PORT } from "src/ports/out/dispositivos-repository.port";
import { GET_DISPOSITIVOS_PORT } from "src/ports/in/dipositivos/get-dispositivos.port";
import { CREATE_DISPOSITIVOS_PORT } from "src/ports/in/dipositivos/create-dispositivos.port";
import { UPDATE_DISPOSITIVOS_PORT } from "src/ports/in/dipositivos/update-dispositivos.port";
import { DELETE_DISPOSITIVOS_PORT } from "src/ports/in/dipositivos/delete-dipositivos.port";

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