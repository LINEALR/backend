import { Module } from "@nestjs/common";
import { PrismaService } from "src/infraestructure/prisma/postgresql/prisma.service";

import { AreasSistemasController } from "src/adapters/in/http/areas-sistemas/areas-sistemas.controller";

import { PrismaAreasSistemasRepository } from "src/adapters/out/prisma/prisma-areas-sistemas.repository";

import { GetAreasSistemasService } from "src/application/areas-sistemas/get-areas-sistemas.service";
import { CreateAreasSistemasService } from "src/application/areas-sistemas/create-areas-sistemas.service";
import { UpdateAreasSistemasService } from "src/application/areas-sistemas/upate-areas-sistemas.service";
import { DeleteAreasSistemasService } from "src/application/areas-sistemas/delete-areas-sistemas.service";

import { AREAS_SISTEMAS_REPOSITORY_PORT } from "src/ports/out/areas-sistemas-repository.port";
import { GET_AREAS_SISTEMAS_PORT } from "src/ports/in/areas-sistemas/get-areas-sistemas.port";
import { CREATE_AREAS_SISTEMAS_PORT } from "src/ports/in/areas-sistemas/create-areas-sistemas.port";
import { UPDATE_AREAS_SISTEMAS_PORT } from "src/ports/in/areas-sistemas/update-areas-sistemas.port";
import { DELETE_AREAS_SISTEMAS_PORT } from "src/ports/in/areas-sistemas/delete-areas-sistemas.port";

@Module({
    imports: [],
    controllers: [AreasSistemasController],
    providers: [
        PrismaService,
        { provide: AREAS_SISTEMAS_REPOSITORY_PORT, useClass: PrismaAreasSistemasRepository },
        { provide: GET_AREAS_SISTEMAS_PORT, useClass: GetAreasSistemasService },
        { provide: CREATE_AREAS_SISTEMAS_PORT, useClass: CreateAreasSistemasService },
        { provide: UPDATE_AREAS_SISTEMAS_PORT, useClass: UpdateAreasSistemasService },
        { provide: DELETE_AREAS_SISTEMAS_PORT, useClass: DeleteAreasSistemasService }
    ],
})

export class AreasSistemasModule {}