import { Factura } from "src/domain/entities/factura/factura.entity";

export const CREATE_FACTURA_PORT = Symbol('CREATE_FACTURA_PORT');

export interface CreateFactura {
    execute(factura: Partial<Factura>): Promise<Factura>;
}