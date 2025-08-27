import { ColaboradoresRepository } from "src/domain/colaboradores/colaboradores.repository";

export const COLABORADORES_REPOSITORY_PORT = Symbol('COLABORADORES_REPOSITORY_PORT')

export type ColaboradoresRepositoryPort = ColaboradoresRepository;