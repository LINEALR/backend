import { Dispositivos } from "src/domain/dispositivo/disposivos.entity";

export const CREATE_DISPOSITIVOS_PORT = Symbol('CREATE_DISPOSITIVOS_PORT');

export interface CreateDispositivos {
    execute(dispositivos: Partial<Dispositivos>): Promise<Dispositivos>;
}