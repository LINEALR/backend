import { HistorialArticulo } from "./historial-articulo.entity";

export interface HistorialArticuloRepository {
    get(search: Partial<HistorialArticulo>): Promise<HistorialArticulo[]>;
    create(historial_articulo: Partial<HistorialArticulo>): Promise<HistorialArticulo>;
    update(id_historial: number, historial_articulo: Partial<HistorialArticulo>): Promise <HistorialArticulo>;
    delete(id_historial: number): Promise<void>;
}