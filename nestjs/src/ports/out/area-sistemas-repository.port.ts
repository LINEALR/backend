import { AreaSistemasRepository } from "src/domain/area-sistemas/area-sistemas.repository";

export const AREA_SISTEMAS_REPOSITORY_PORT = Symbol('AREA_SISTEMAS_REPOSITORY_PORT');   

export type AreaSistemasRepositoryPort = AreaSistemasRepository;