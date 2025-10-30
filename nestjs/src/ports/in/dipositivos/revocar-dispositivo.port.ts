import { Dispositivos } from "src/domain/entities/dispositivo/dispositivos.entity";

export const REVOCAR_DISPOSITIVO_PORT = Symbol('REVOCAR_DISPOSITIVO_PORT');

export interface RevocarDispositivo {
    execute(RevocarDispositivo: { id_dispositivos: number; num_control: number }): Promise<Dispositivos>;
}