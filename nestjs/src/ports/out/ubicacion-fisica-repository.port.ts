import { UbicacionFisicaRepository } from "src/domain/ubicacion-fisica/ubicacion-fisica.repository";

export const UBICACION_FISICA_REPOSITORY_PORT = Symbol('UBICACION_FISICA_REPOSITORY_PORT');

export type UbicacionFisicaRepositoryPort = UbicacionFisicaRepository;