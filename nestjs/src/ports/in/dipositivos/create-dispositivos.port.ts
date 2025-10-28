import { Dispositivos } from "src/domain/entities/dispositivo/dispositivos.entity";

export const CREATE_DISPOSITIVOS_PORT = Symbol('CREATE_DISPOSITIVOS_PORT');

export interface CreateDispositivos {
    execute(dispositivos: Partial<Dispositivos>): Promise<Dispositivos>;
}