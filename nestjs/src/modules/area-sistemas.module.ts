import { Module } from "@nestjs/common";
import { PrismaService } from "src/infraestructure/prisma/prisma.service";

import { AreaSistemasController } from "src/adapters/in/http/area-sistemas/area-sistemas.controller";

import { PrismaAreaSistemasRepository } from "src/adapters/out/prisma/prisma-area-sistemas.repository";

import { GetAreaSistemasService } from "src/application/area-sistemas/get-area-sistemas.service";
import { CreateAreaSistemasService } from "src/application/area-sistemas/create-area-sistemas.service";
import { UpdateAreaSistemasService } from "src/application/area-sistemas/upate-area-sistemas.service";
import { DeleteAreaSistemasService } from "src/application/area-sistemas/delete-area-sistemas.service";

import { AREA_SISTEMAS_REPOSITORY_PORT } from "src/ports/out/area-sistemas-repository.port";
import { GET_AREA_SISTEMAS_PORT } from "src/ports/in/area-sistemas/get-area-sistemas.port";
import { CREATE_AREA_SISTEMAS_PORT } from "src/ports/in/area-sistemas/create-area-sistemas.port";
import { UPDATE_AREA_SISTEMAS_PORT } from "src/ports/in/area-sistemas/update-area-sistemas.port";
import { DELETE_AREA_SISTEMAS_PORT } from "src/ports/in/area-sistemas/delete-area-sistemas.port";

@Module({
    imports: [],
    controllers: [AreaSistemasController],
    providers: [
        PrismaService,
        { provide: AREA_SISTEMAS_REPOSITORY_PORT, useClass: PrismaAreaSistemasRepository },
        { provide: GET_AREA_SISTEMAS_PORT, useClass: GetAreaSistemasService },
        { provide: CREATE_AREA_SISTEMAS_PORT, useClass: CreateAreaSistemasService },
        { provide: UPDATE_AREA_SISTEMAS_PORT, useClass: UpdateAreaSistemasService },
        { provide: DELETE_AREA_SISTEMAS_PORT, useClass: DeleteAreaSistemasService }
    ],
})

export class AreaSistemasModule {}