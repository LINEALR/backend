import { HistorialArticuloRepository } from "src/domain/historial-articulo/historial-articulos.repository";

export const HISTORIAL_ARTICULO_REPOSITORY_PORT = Symbol('HISTORIAL_ARTICULO_REPOSITORY_PORT');

export type HistorialArticuloRepositoryPort = HistorialArticuloRepository;