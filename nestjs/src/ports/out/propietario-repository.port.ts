import { PropietarioRepository } from "src/domain/propietario/propietario.repository";

export const PROPIETARO_REPOSITORY_PORT = Symbol('PROPIETARO_REPOSITORY_PORT');

export type PropietarioRepositoryPort = PropietarioRepository;