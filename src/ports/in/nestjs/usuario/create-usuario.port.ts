import { Usuario } from "src/nestjs/domain/usuario/usuario.entity";

export const CREATE_USUARIO_PORT = Symbol('CREATE_USUARIO_PORT');

export interface CreateUsuario {
    execute(usuario: Partial<Usuario>): Promise<Usuario>;
}