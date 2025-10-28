import { Usuario } from "src/domain/entities/usuario/usuario.entity";

export const GET_USUARIO_PORT = Symbol('GET_USUARIO_PORT');

export interface GetUsuario {
    execute(usuarios?: Partial<Usuario>, page?: number, pageSize?: number):
        Promise<{
            usuario: Usuario[];
            total: number;
            totalPages: number;
            currentPage: number;
        }>;
}