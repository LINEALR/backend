import { Usuario } from "./usuario.entity";

export interface UsuarioRepository {
    get(usuarios: Partial<Usuario>): Promise<Usuario[]>;
    create(usuario: Partial<Usuario>): Promise<Usuario>;
    update(id_usuario: number, usuario: Partial<Usuario>): Promise<Usuario>;
    delete(id_usuario: number): Promise<void>;
}