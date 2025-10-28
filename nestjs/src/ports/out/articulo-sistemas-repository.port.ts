import { ArticuloSistemasRepository } from "src/domain/entities/articulo-sistemas/articulo-sistemas.repository";

export const ARTICULO_SISTEMAS_REPOSITORY_PORT = Symbol('ARTICULO_SISTEMAS_REPOSITORY_PORT');

export type ArticuloSistemasRepositoryPort = ArticuloSistemasRepository;