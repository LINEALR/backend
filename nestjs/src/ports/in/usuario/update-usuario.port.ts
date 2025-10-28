import { Usuario } from "src/domain/entities/usuario/usuario.entity";

export const UPDATE_USUARIO_PORT = Symbol('UPDATE_USUARIO_PORT');

export interface UpdateUsuario {
    execute(id_usuario: number, usuario: Partial<Usuario>): Promise<Usuario>;
}