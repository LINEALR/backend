import { Usuario } from "src/domain/usuario/usuario.entity";

export const GET_USUARIO_PORT = Symbol('GET_USUARIO_PORT');

export interface GetUsuario {
    execute(usuarios?: Partial<Usuario>): Promise<Usuario[] | null>;
}