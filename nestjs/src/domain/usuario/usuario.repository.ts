import { Usuario } from "./usuario.entity";

export interface UsuarioRepository {
    get(usuarios: Partial<Usuario>, page?: number, pageSize?: number): 
    Promise<{
        usuario: Usuario[];
        total: number;
        totalPages: number;
        currentPage: number;
    }>;
    create(usuario: Partial<Usuario>): Promise<Usuario>;
    update(id_usuario: number, usuario: Partial<Usuario>): Promise<Usuario>;
    delete(id_usuario: number): Promise<void>;
}