import { MovimientoDispositivoEvent } from "src/domain/events/movimiento-dispositivo.event";

export const EVENT_BUS_PORT = 'EVENT_BUS_PORT';

export interface EventBusPort {
    publish(event: MovimientoDispositivoEvent): Promise<void>;
}