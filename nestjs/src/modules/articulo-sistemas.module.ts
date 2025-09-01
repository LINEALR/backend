import { Module } from "@nestjs/common";
import { PrismaService } from "src/infraestructure/prisma/prisma.service";

import { ArticuloSistemasController } from "src/adapters/in/http/articulo-sistemas/articulo-sistemas.controller";

import { PrismaArticuloSistemasRepository } from "src/adapters/out/prisma/prisma-articulo-sistemas.repository";

import { GetArticuloSistemasService } from "src/application/articulo-sistemas/get-articulo-sistemas.service";
import { CreateArticuloSistemasService } from "src/application/articulo-sistemas/create-articulo-sistemas.service";
import { UpdateArticuloSistemasService } from "src/application/articulo-sistemas/update-articulo-sistemas.service";
import { DeleteArticuloSistemasService } from "src/application/articulo-sistemas/delete-articulo-sistemas.service";

import { ARTICULO_SISTEMAS_REPOSITORY_PORT } from "src/ports/out/articulo-sistemas-repository.port";
import { GET_ARTICULO_SISTEMAS_PORT } from "src/ports/in/articulo-sistemas/get-articulo-sistemas.port";
import { CREATE_ARTICULO_SISTEMAS_PORT } from "src/ports/in/articulo-sistemas/create-articulo-sistemas.port";
import { UPDATE_ARTICULO_SISTEMAS_PORT } from "src/ports/in/articulo-sistemas/update-articulo-sistemas.port";
import { DELETE_ARTICULO_SISTEMAS_PORT } from "src/ports/in/articulo-sistemas/delete-articulo-sistemas.port";

@Module({
    imports: [],
    controllers: [ArticuloSistemasController],
    providers: [
        PrismaService,
        { provide: ARTICULO_SISTEMAS_REPOSITORY_PORT, useClass: PrismaArticuloSistemasRepository },
        { provide: GET_ARTICULO_SISTEMAS_PORT, useClass: GetArticuloSistemasService },
        { provide: CREATE_ARTICULO_SISTEMAS_PORT, useClass: CreateArticuloSistemasService },
        { provide: UPDATE_ARTICULO_SISTEMAS_PORT, useClass: UpdateArticuloSistemasService },
        { provide: DELETE_ARTICULO_SISTEMAS_PORT, useClass: DeleteArticuloSistemasService },
    ],
})

export class ArticuloSistemasModule { }