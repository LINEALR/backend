import { Usuario } from "src/domain/entities/usuario/usuario.entity";

export const CREATE_USUARIO_PORT = Symbol('CREATE_USUARIO_PORT');

export interface CreateUsuario {
    execute(usuario: Partial<Usuario>): Promise<Usuario>;
}