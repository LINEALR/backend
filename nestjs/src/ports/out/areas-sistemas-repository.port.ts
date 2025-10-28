import { AreasSistemasRepository } from "src/domain/entities/areas-sistemas/areas-sistemas.repository";

export const AREAS_SISTEMAS_REPOSITORY_PORT = Symbol('AREAS_SISTEMAS_REPOSITORY_PORT');   

export type AreasSistemasRepositoryPort = AreasSistemasRepository;