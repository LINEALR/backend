import { Movimiento } from "./movimientos.entity";

export interface MovimientoRepository {
    create(movimiento: Movimiento): Promise<void>;
    getById(id_area: number): Promise<Movimiento | null>;
    update(movimiento: Movimiento): Promise<void>;
    delete(id_movimiento: number): Promise<void>;
}