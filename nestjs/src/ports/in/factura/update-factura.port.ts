import { Factura } from "src/domain/entities/factura/factura.entity";

export const UPDATE_FACTURA_PORT = Symbol('UPDATE_FACTURA_PORT');
export interface UpdateFactura {
    execute(id_factura: number, factura: Partial<Factura>): Promise<Factura>;
}