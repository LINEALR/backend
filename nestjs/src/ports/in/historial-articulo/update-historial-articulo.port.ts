import { HistorialArticulo } from "src/domain/historial-articulo/historial-articulo.entity";

export const UPDATE_HISTORIAL_ARTICULO_PORT = Symbol('UPDATE_HISTORIAL_ARTICULO_PORT');

export interface UpdateHistorialArticulo {
    execute(id_historial: number, historial_articulo: Partial<HistorialArticulo>);
}