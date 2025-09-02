import { HistorialArticulo } from "src/domain/historial-articulo/historial-articulo.entity";

export const GET_HISTORIAL_ARTICULO_PORT = Symbol('GET_HISTORIAL_ARTICULO_PORT');

export interface GetHistorialArticulo {
    execute(search?: Partial<HistorialArticulo>): Promise<HistorialArticulo[]>;
}