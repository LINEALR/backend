import { Usuario } from "./usuario.entity";

export interface UsuarioRepository {
    create(usuario: Usuario): Promise<void>;
    getById(id_usuario: number): Promise<Usuario | null>;
    update(usuario: Usuario): Promise<void>;
    delete(id_usuario: number): Promise<void>;
}