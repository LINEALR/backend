import { ParseUUIDPipe } from "@nestjs/common";
import { HistorialArticulo } from "src/domain/entities/historial-articulo/historial-articulo.entity";

export const CREATE_HISTORIAL_ARTICULO_PORT = Symbol('CREATE_HISTORIAL_ARTICULO_PORT');

export interface CreateHistorialArticulo {
    execute(historial_articulo: Partial<HistorialArticulo>): Promise<HistorialArticulo>;
}