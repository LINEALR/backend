import { FacturaRepository } from "src/domain/factura/factura.repository";

export const FACTURA_REPOSITORY_PORT = Symbol('FACTURA_REPOSITORY_PORT');

export type FacturaRepositoryPort = FacturaRepository;