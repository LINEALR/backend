import { Usuario } from "src/nestjs/domain/usuario/usuario.entity";

export const GET_USUARIO_PORT = Symbol('GET_USUARIO_PORT');

export interface GetUsuarios {
    execute(usuarios?: Partial<Usuario>): Promise<Usuario[] | null>;
}