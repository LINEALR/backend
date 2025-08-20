import { Dispositivos } from "src/nestjs/domain/dispositivo/disposivos.entity";

export const DELETE_DISPOSOTIVOS_PORT = Symbol('DELTE_DIPOSITIVOS_PORT');

export interface DeleteDispositivos {
    execute(id_dispositivo: number): Promise<void>;
}