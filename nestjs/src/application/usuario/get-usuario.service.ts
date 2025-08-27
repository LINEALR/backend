import { Inject, Injectable } from "@nestjs/common";
import { Usuario } from "src/domain/usuario/usuario.entity";
import { GetUsuario } from "src/ports/in/usuario/get-usuario.port";
import type { UsuarioRepositoryPort } from "src/ports/out/usuario-repository.port";
import { USUARIO_REPOSITORY_PORT } from "src/ports/out/usuario-repository.port";

@Injectable()
export class GetUsuariosService implements GetUsuario {
    constructor(@Inject(USUARIO_REPOSITORY_PORT) private readonly repo: UsuarioRepositoryPort) {}
    
    async execute(usuarios: Partial<Usuario>): Promise<Usuario[] | null> {
        const usuario = await this.repo.get(usuarios);
        if(!usuario){
            throw new Error('Usuario ya existente')
        }
        return usuario;
    }
}