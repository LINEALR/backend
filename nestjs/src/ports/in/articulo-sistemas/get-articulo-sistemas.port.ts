import { ArticuloSistemas } from "src/domain/articulo-sistemas/articuloSistemas.entity";

export const GET_ARITICULO_SISTEMAS_PORT = Symbol('GET_ARITICULO_SISTEMAS_PORT');

export interface GetArticuloSistemas {
    execute(search?: Partial<ArticuloSistemas>): Promise<ArticuloSistemas[]>;
}