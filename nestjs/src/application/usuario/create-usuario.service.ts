import { Inject, Injectable } from "@nestjs/common";
import { Usuario } from "src/domain/entities/usuario/usuario.entity";
import { CreateUsuario } from "src/ports/in/usuario/create-usuario.port";
import type { UsuarioRepositoryPort } from "src/ports/out/usuario-repository.port";
import { USUARIO_REPOSITORY_PORT } from "src/ports/out/usuario-repository.port";

@Injectable()
export class CreateUsuarioService implements CreateUsuario {
    constructor(@Inject(USUARIO_REPOSITORY_PORT) private readonly repo: UsuarioRepositoryPort) {}

    async execute(usuario: Partial<Usuario>): Promise<Usuario> {
        if(!usuario.num_control) {
            throw new Error ('El numero de control es obligatorio');
        }
        return await this.repo.create(usuario);
    }
}