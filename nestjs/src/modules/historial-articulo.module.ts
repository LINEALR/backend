import { Module } from "@nestjs/common";
import { PrismaService } from "src/infraestructure/prisma/postgresql/prisma.service";

import { HistorialArticuloController } from "src/adapters/in/http/historial-articulo/historial-articulo.controller";

import { PrismaHistorialArticulosRepository } from "src/adapters/out/prisma/prisma-historial-articulo.repository";

import { GetHistorialArticuloService } from "src/application/historial-articulo/get-historial-articulo.service";
import { CreateHistorialArticuloService } from "src/application/historial-articulo/create-historial-articulo.service";
import { UpdateHistorialArticuloService } from "src/application/historial-articulo/update-historal-articulo.service";
import { DeleteHistorialArticuloService } from "src/application/historial-articulo/delete-historial-articulo.service";

import { HISTORIAL_ARTICULO_REPOSITORY_PORT } from "src/ports/out/historial-articulo.port";
import { GET_HISTORIAL_ARTICULO_PORT } from "src/ports/in/historial-articulo/get-historial-articulo.port";
import { CREATE_HISTORIAL_ARTICULO_PORT } from "src/ports/in/historial-articulo/create-historial-articulo.port";
import { UPDATE_HISTORIAL_ARTICULO_PORT } from "src/ports/in/historial-articulo/update-historial-articulo.port";
import { DELETE_HISTORIAL_ARTICULO_PORT } from "src/ports/in/historial-articulo/delete-historial-articulo.port";
import { ColaboradoresModule } from "./colaboradores.module";

@Module ({
        imports: [ColaboradoresModule],
        controllers: [HistorialArticuloController],
        providers: [
            PrismaService,
            { provide: HISTORIAL_ARTICULO_REPOSITORY_PORT, useClass: PrismaHistorialArticulosRepository },
            { provide: GET_HISTORIAL_ARTICULO_PORT, useClass: GetHistorialArticuloService },
            { provide: CREATE_HISTORIAL_ARTICULO_PORT, useClass: CreateHistorialArticuloService },
            { provide: UPDATE_HISTORIAL_ARTICULO_PORT, useClass: UpdateHistorialArticuloService },
            { provide: DELETE_HISTORIAL_ARTICULO_PORT, useClass: DeleteHistorialArticuloService }
        ],
    })

export class HistorialArticuloModule { }