import { ArticuloSistemas } from "src/domain/articulo-sistemas/articulo-sistemas.entity";

export const UPDATE_ARTICULO_SISTEMAS_PORT = Symbol('UPDATE_ARTICULO_SISTEMAS_PORT');

export interface UpdateArticuloSistemas {
    execute(id_area: number, area_sistemas: Partial<ArticuloSistemas>): Promise<ArticuloSistemas>;
}