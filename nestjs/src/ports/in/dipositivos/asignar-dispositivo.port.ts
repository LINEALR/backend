import { Dispositivos } from "src/domain/dispositivo/dispositivos.entity";

export const ASIGNAR_DISPOSITIVO_PORT = Symbol('ASIGNAR_DISPOSITIVO_PORT');

export interface AsignarDispositivo {
    execute(AsignarDispositivo: { id_dispositivos: number; num_control: number }): Promise<Dispositivos>;
}