import { Inject, Injectable } from "@nestjs/common";
import type { UsuarioRepositoryPort } from "src/ports/out/nestjs/usuario-repository.port";
import { USUARIO_REPOSITORY_PORT } from "src/ports/out/nestjs/usuario-repository.port";
import { DeleteUsuario } from "src/ports/in/nestjs/usuario/delete-usuario.port";

@Injectable()
export class DeleteUsuarioService implements DeleteUsuario {
    constructor(@Inject(USUARIO_REPOSITORY_PORT) private readonly repo: UsuarioRepositoryPort) {}

    async execute(id_usuario: number): Promise<void> {
        return await this.repo.delete(id_usuario);
    }
}