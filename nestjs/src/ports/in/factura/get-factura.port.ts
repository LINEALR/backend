import { Factura } from "src/domain/factura/factura.entity";

export const GET_FACTURA_PORT = Symbol('GET_FACTURA_PORT');

export interface GetFactura {
    execute(search: Partial<Factura>, page?: number, pageSize?: number):
        Promise<{
            factura: Factura[];
            total: number;
            totalPages: number;
            currentPage: number;
        }>;
}