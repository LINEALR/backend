import { Inject, Injectable } from "@nestjs/common";
import { Usuario } from "src/nestjs/domain/usuario/usuario.entity";
import { GetUsuarios } from "src/ports/in/nestjs/usuario/get-usuario.port";
import type { UsuarioRepositoryPort } from "src/ports/out/nestjs/usuario-repository.port";
import { USUARIO_REPOSITORY_PORT } from "src/ports/out/nestjs/usuario-repository.port";

@Injectable()
export class GetUsuariosService implements GetUsuarios {
    constructor(@Inject(USUARIO_REPOSITORY_PORT) private readonly repo: UsuarioRepositoryPort) {}
    
    async execute(usuarios: Partial<Usuario>): Promise<Usuario[] | null> {
        const usuario = await this.repo.get(usuarios);
        if(!usuario){
            throw new Error('Usuario ya existente')
        }
        return usuario;
    }
}