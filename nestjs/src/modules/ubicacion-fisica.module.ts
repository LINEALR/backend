import { Module } from "@nestjs/common";
import { PrismaService } from "src/infraestructure/prisma/postgresql/prisma.service";

import { UbicacionFisicaController } from "src/adapters/in/http/ubicacion-fisica/ubicacion-fisica.controller";

import { PrismaUbiacionFisicaRepository } from "src/adapters/out/prisma/prisma-ubicacion-fisica.repository";

import { GetUbicacionFisicaService } from "src/application/ubicacion-fisica/get-ubicacion-fisica.service";
import { CreateUbicacionFisicaService } from "src/application/ubicacion-fisica/create-ubicacion-fisica.service";
import { UpdateUbicacionFisicaService } from "src/application/ubicacion-fisica/update-ubicacion-fisica.service";
import { DeleteUbicacionFisicaService } from "src/application/ubicacion-fisica/delete-ubicacion-fisica.service";

import { UBICACION_FISICA_REPOSITORY_PORT } from "src/ports/out/ubicacion-fisica-repository.port";
import { GET_UBICACION_FISICA_PORT } from "src/ports/in/ubicacion-fisica/get-ubicacion-fisica.port";
import { CREATE_UBICACION_FISICA_PORT } from "src/ports/in/ubicacion-fisica/create-ubicacion-fisica.port";
import { UPDATE_UBICACION_FISICA_PORT } from "src/ports/in/ubicacion-fisica/update-ubicacion-fisica.port";
import { DELETE_UBICACION_FISICA_PORT } from "src/ports/in/ubicacion-fisica/delete-ubicacion-fisica.port";

@Module({
    imports: [],
    controllers: [UbicacionFisicaController],
    providers:
        [
            PrismaService,
            { provide: UBICACION_FISICA_REPOSITORY_PORT, useClass: PrismaUbiacionFisicaRepository },
            { provide: GET_UBICACION_FISICA_PORT, useClass: GetUbicacionFisicaService },
            { provide: CREATE_UBICACION_FISICA_PORT, useClass: CreateUbicacionFisicaService },
            { provide: UPDATE_UBICACION_FISICA_PORT, useClass: UpdateUbicacionFisicaService },
            { provide: DELETE_UBICACION_FISICA_PORT, useClass: DeleteUbicacionFisicaService }
        ]
})

export class UbicacionFisicaModule { }