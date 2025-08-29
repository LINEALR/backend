import { ArticuloSistemasRepository } from "src/domain/articulo-sistemas/articuloSistemas.repository";

export const ARTICULO_SISTEMAS_REPOSITORY_PORT = Symbol('ARTICULO_SISTEMAS_REPOSITORY_PORT');

export type ArticuloSistemasRepositoryPort = ArticuloSistemasRepository;