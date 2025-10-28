export class Movimiento {
        public readonly id_movimiento?: number;
        public descripcion_movimiento: string;

        constructor(data: {
            descripcion_movimiento: string,
            id_movimiento?: number
        }) {
            Object.assign(this, data);
        }
}