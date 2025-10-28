import { DispositivosRepository } from "src/domain/entities/dispositivo/dispositivos.repository";

export const DISPOSITIVOS_REPOSITORY_PORT = Symbol('DISPOSITIVOS_REPOSITORY_PORT');

export type DispositivosRepositoryPort = DispositivosRepository;