import { HistorialArticulo } from "./historialArticulo";

export interface HistorialArticuloRepository {
    create(historialArticulo: HistorialArticulo): Promise<void>;
    getById(id_historial: number): Promise<void>;
    update(historialArticulo: HistorialArticulo): Promise <void>;
    delete(id_historial: number): Promise<void>;
}