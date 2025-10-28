import { ArticuloSistemas } from "./articulo-sistemas.entity";

export interface ArticuloSistemasRepository {
    get(search: Partial<ArticuloSistemas>, page?: number, pageSize?: number):
        Promise<{
            articuloSistemas: ArticuloSistemas[];
            total: number;
            totalPages: number;
            currentPage: number;
        }>;
    create(articuloSistemas: Partial<ArticuloSistemas>): Promise<ArticuloSistemas>;
    update(id_articulo: number, articulo_sistemas: Partial<ArticuloSistemas>): Promise<ArticuloSistemas>;
    delete(id_articulo: number): Promise<void>;
}