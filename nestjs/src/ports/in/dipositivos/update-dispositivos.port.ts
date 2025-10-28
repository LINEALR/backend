import { Dispositivos } from "src/domain/entities/dispositivo/dispositivos.entity";

export const UPDATE_DISPOSITIVOS_PORT = Symbol('UPDATE_DISPOSITIVOS_PORT');

export interface UpdateDispositivos {
    execute(id_dispositivos: number, dispositivo: Partial<Dispositivos>): Promise<Dispositivos>;
}