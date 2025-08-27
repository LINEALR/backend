import { Factura } from "./factura.entity";

export interface FacturaRepository {
    create(factura: Factura): Promise<void>;
    getById(id_factura: number): Promise<Factura | null>;
    update(factura: Factura): Promise<void>;
    delete(id_factura: number): Promise<void>;
}