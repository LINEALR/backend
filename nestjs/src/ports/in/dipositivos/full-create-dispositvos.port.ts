import { Dispositivos } from "src/domain/entities/dispositivo/dispositivos.entity";
import { Factura } from "src/domain/entities/factura/factura.entity";

export const FULL_CREATE_DISPOSITIVOS_PORT = Symbol('FULL_CREATE_DISPOSITIVOS_PORT');

export interface FullCreateDispositivos {
    execute(data: { dispositivos: Partial<Dispositivos>, factura: Partial<Factura> }): Promise<{ dispositivos: Dispositivos; factura: Factura }>;
}