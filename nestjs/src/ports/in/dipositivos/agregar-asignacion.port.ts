import { Dispositivos } from "src/domain/dispositivo/dispositivos.entity";

export const AGREGAR_CON_ASIGNACION_PORT = Symbol("AGREGAR_CON_ASIGNACION_PORT");

export interface AgregarAsignacion {
    execute(AgregarAsignacion: Partial<Dispositivos>): Promise<Dispositivos>;
}