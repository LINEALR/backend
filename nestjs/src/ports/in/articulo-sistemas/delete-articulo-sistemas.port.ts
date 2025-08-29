export const DELETE_ARTICULO_SISTEMAS_PORT = Symbol('DELETE_ARTICULO_SISTEMAS_PORT');

export interface DeleteArticuloSistemas {
    execute(id_articulo: number): Promise<void>;
}