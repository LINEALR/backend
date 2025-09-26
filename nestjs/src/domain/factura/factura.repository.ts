import { Factura } from "./factura.entity";

export interface FacturaRepository {
    get(search: Partial<Factura>, page?: number, pageSize?: number): 
    Promise<{
        factura: Factura[];
        total: number;
        totalPages: number;
        currentPage: number;
    }>;
    create(factura: Partial<Factura>): Promise<Factura>;
    update(id_factura: number, factura: Partial<Factura>): Promise<Factura>;
    delete(id_factura: number): Promise<void>;
}