import { Dispositivos } from "src/nestjs/domain/dispositivo/disposivos.entity";

export const GET_DISPOSITIVOS_PORT = Symbol('GET_DISPOSITIVOS_PORT');

export interface GetDispositivos {
    execute(disposivos?: Partial<Dispositivos>): Promise<Dispositivos[] | null>;
}