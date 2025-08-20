import { Dispositivos } from "src/nestjs/domain/dispositivo/disposivos.entity";

export const UPDATE_DISPOSITIVOS_PORT = Symbol('UPDATE_COLABORADORES_PORT');

export interface UpdateDispositivos {
    execute(id_dispositivos: number, dispositivo: Partial<Dispositivos>): Promise<Dispositivos>;
}