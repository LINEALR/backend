export const DELETE_FACTURA_PORT = Symbol('DELETE_FACTURA_PORT');

export interface DeleteFactura {
    execute(id_factura: number): Promise<void>;
}