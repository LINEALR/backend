import { Factura } from "src/domain/factura/factura.entity";

export const GET_FACTURA_PORT = Symbol('GET_FACTURA_PORT');

export interface GetFactura {
    execute(search: Partial<Factura>): Promise<Factura[]>;
}