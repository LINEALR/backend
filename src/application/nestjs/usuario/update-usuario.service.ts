import { Inject, Injectable } from "@nestjs/common";
import { Usuario } from "src/nestjs/domain/usuario/usuario.entity";
import { UpdateUsuario } from "src/ports/in/nestjs/usuario/update-usuario.port";
import type { UsuarioRepositoryPort } from "src/ports/out/nestjs/usuario-repository.port";
import { USUARIO_REPOSITORY_PORT } from "src/ports/out/nestjs/usuario-repository.port";

@Injectable()
export class UpdateUsuarioService implements UpdateUsuario {
    constructor(@Inject(USUARIO_REPOSITORY_PORT) private readonly repo: UsuarioRepositoryPort) {}

    async execute(id_usuario: number, usuario: Partial<Usuario>): Promise<Usuario> {
        return await this.repo.update(id_usuario, usuario);
    }
}