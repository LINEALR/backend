import { ArticuloSistemas } from "src/domain/articulo-sistemas/articulo-sistemas.entity";

export const GET_ARTICULO_SISTEMAS_PORT = Symbol('GET_ARTICULO_SISTEMAS_PORT');

export interface GetArticuloSistemas {
    execute(search?: Partial<ArticuloSistemas>, page?: number, pageSize?: number):
        Promise<{
            articuloSistemas: ArticuloSistemas[];
            total: number;
            totalPages: number;
            currentPage: number;
        }>;
}