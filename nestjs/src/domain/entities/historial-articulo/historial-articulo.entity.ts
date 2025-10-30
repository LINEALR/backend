export class HistorialArticulo {
    public readonly id_historial?: number;
    public readonly id_colaboradores: number;
    public readonly id_usuario: number;
    public readonly id_dispositivos: number;
    public readonly id_movimiento: number;
    public readonly fecha_modificacion: Date; //Date

    constructor(data: {
        id_colaboradores: number;
        id_usuario: number;
        id_dispositivos: number;
        id_movimiento: number;
        fecha_modificacion: Date; //Date
        id_historial?: number;
    }) {
        Object.assign(this, data);
    }
} 