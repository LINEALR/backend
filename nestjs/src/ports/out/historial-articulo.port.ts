import { HistorialArticuloRepository } from "src/domain/entities/historial-articulo/historial-articulos.repository";

export const HISTORIAL_ARTICULO_REPOSITORY_PORT = Symbol('HISTORIAL_ARTICULO_REPOSITORY_PORT');

export type HistorialArticuloRepositoryPort = HistorialArticuloRepository;