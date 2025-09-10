import { Module } from "@nestjs/common";
import { PrismaService } from "src/infraestructure/prisma/postgresql/prisma.service";

import { UsuarioController } from "src/adapters/in/http/usuario/usuario.controller";

import { PrismaUsuariosRepository } from "src/adapters/out/prisma/prisma-usuario.repository";

import { GetUsuariosService } from "src/application/usuario/get-usuario.service";
import { CreateUsuarioService } from "src/application/usuario/create-usuario.service";
import { UpdateUsuarioService } from "src/application/usuario/update-usuario.service";
import { DeleteUsuarioService } from "src/application/usuario/delete-usuario.service";

import { USUARIO_REPOSITORY_PORT } from "src/ports/out/usuario-repository.port";
import { GET_USUARIO_PORT } from "src/ports/in/usuario/get-usuario.port";
import { CREATE_USUARIO_PORT } from "src/ports/in/usuario/create-usuario.port";
import { UPDATE_USUARIO_PORT } from "src/ports/in/usuario/update-usuario.port";
import { DELETE_USUARIO_PORT } from "src/ports/in/usuario/delete-usuario.port";

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