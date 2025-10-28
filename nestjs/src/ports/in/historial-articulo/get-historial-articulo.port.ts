import { HistorialArticulo } from "src/domain/entities/historial-articulo/historial-articulo.entity";

export const GET_HISTORIAL_ARTICULO_PORT = Symbol('GET_HISTORIAL_ARTICULO_PORT');

export interface GetHistorialArticulo {
    execute(search?: Partial<HistorialArticulo>, page?: number, pageSize?: number):
        Promise<{
            historialArticulo: HistorialArticulo[];
            total: number;
            totalPages: number;
            currentPage: number;
        }>;
}
