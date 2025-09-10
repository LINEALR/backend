import { Module } from "@nestjs/common";
import { PrismaService } from "src/infraestructure/prisma/postgresql/prisma.service";

import { PropietarioController } from "src/adapters/in/http/propietario/propietario.controller";

import { PrismaPropietarioRepository } from "src/adapters/out/prisma/prisma-propietario.repository";

import { GetPropietarioService } from "src/application/propietario/get-propoietario.service";
import { CreatePropietarioService } from "src/application/propietario/create-propietario.service";
import { UpdatePropietarioService } from "src/application/propietario/update-propietaro.service";
import { DeletePropietarioService } from "src/application/propietario/delete-propietario.service";

import { PROPIETARO_REPOSITORY_PORT } from "src/ports/out/propietario-repository.port";
import { GET_PROPIETARIO_PORT } from "src/ports/in/propietario/get-propietario.port";
import { CREATE_PROPIETARIO_PORT } from "src/ports/in/propietario/create-propietario.port";
import { UPDATE_PROPIETARIO_PORT } from "src/ports/in/propietario/update-propietario.port";
import { DELETE_PROPIETARIO_PORT } from "src/ports/in/propietario/delete-propietario,port";

@Module({
    imports: [],
    controllers: [PropietarioController],
    providers: [
        PrismaService,
{ provide: PROPIETARO_REPOSITORY_PORT, useClass: PrismaPropietarioRepository},
{ provide: GET_PROPIETARIO_PORT, useClass: GetPropietarioService },
{ provide: CREATE_PROPIETARIO_PORT, useClass: CreatePropietarioService },
{ provide: UPDATE_PROPIETARIO_PORT, useClass: UpdatePropietarioService },
{ provide: DELETE_PROPIETARIO_PORT, useClass: DeletePropietarioService }
    ]
})

export class PropietarioModule { }