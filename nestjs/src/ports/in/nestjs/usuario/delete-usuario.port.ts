export const DELETE_USUARIO_PORT = Symbol('DELETE_USUARIO_PORT');

export interface DeleteUsuario {
    execute(id_usuario: number): Promise<void>;
}