import { ArticuloSistemas } from "src/domain/articulo-sistemas/articulo-sistemas.entity";

export const CREATE_ARTICULO_SISTEMAS_PORT = Symbol('CREATE_COLABORADORES_PORT');

export interface CreateArticuloSistemas {
    execute(articulo_sistemas: Partial<ArticuloSistemas>): Promise<ArticuloSistemas>;
}