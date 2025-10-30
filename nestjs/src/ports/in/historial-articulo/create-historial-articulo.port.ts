import { ParseUUIDPipe } from "@nestjs/common";
import { HistorialArticulo } from "src/domain/entities/historial-articulo/historial-articulo.entity";

export const CREATE_HISTORIAL_ARTICULO_PORT = Symbol('CREATE_HISTORIAL_ARTICULO_PORT');

export interface CreateHistorialArticulo {
    execute(historial_articulo: {num_control: number; id_usuario: number; id_dispositivos: number; movimiento: string; fecha_modificacion: Date}): Promise<HistorialArticulo>;
}