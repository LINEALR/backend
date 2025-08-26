import { Module } from "@nestjs/common";
import { PrismaService } from "src/infraestructure/nestjs/prisma/prisma.service";

import { UsuarioController } from "src/adapters/in/nestjs/http/usuario/usuario.controller";

import { PrismaUsuariosRepository } from "src/adapters/out/nestjs/prisma/prisma-usuario.repository";

import { GetUsuariosService } from "src/application/nestjs/usuario/get-usuario.service";
import { CreateUsuarioService } from "src/application/nestjs/usuario/create-usuario.service";
import { UpdateUsuarioService } from "src/application/nestjs/usuario/update-usuario.service";
import { DeleteUsuarioService } from "src/application/nestjs/usuario/delete-usuario.service";

import { USUARIO_REPOSITORY_PORT } from "src/ports/out/nestjs/usuario-repository.port";
import { GET_USUARIO_PORT } from "src/ports/in/nestjs/usuario/get-usuario.port";
import { CREATE_USUARIO_PORT } from "src/ports/in/nestjs/usuario/create-usuario.port";
import { UPDATE_USUARIO_PORT } from "src/ports/in/nestjs/usuario/update-usuario.port";
import { DELETE_USUARIO_PORT } from "src/ports/in/nestjs/usuario/delete-usuario.port";

@Module({
    imports: [],
    controllers: [UsuarioController],
    providers: [
        PrismaService,
        { provide: USUARIO_REPOSITORY_PORT, useClass: PrismaUsuariosRepository },
        { provide: GET_USUARIO_PORT, useClass: GetUsuariosService },
        { provide: CREATE_USUARIO_PORT, useClass: CreateUsuarioService },
        { provide: UPDATE_USUARIO_PORT, useClass: UpdateUsuarioService },
        { provide: DELETE_USUARIO_PORT, useClass: DeleteUsuarioService }
    ],
})

export class UsuarioModule {}