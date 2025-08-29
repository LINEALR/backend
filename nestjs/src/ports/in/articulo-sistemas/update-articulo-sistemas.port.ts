import { ArticuloSistemas } from "src/domain/articulo-sistemas/articuloSistemas.entity";

export const UPDATE_ARTICULO_SISTEMAS_PORT = Symbol('UPDATE_ARTICULO_SISTEMAS_PORT');

export interface UpdateAreaSistemas {
    execute(id_area: number, area_sistemas: Partial<ArticuloSistemas>);
}