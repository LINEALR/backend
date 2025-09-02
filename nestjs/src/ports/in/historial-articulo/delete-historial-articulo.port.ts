export const DELETE_HISTORIAL_ARTICULO_PORT = Symbol('DELETE_HISTORIAL_ARTICULO_PORT');

export interface DeleteHistorialArticulo {
    execute(id_historial: number): Promise <void>;
}