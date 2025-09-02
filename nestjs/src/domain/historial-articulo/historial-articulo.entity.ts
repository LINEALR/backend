export class HistorialArticulo {
    public readonly id_historial?: number;
    public readonly id_usuario: number;
    public readonly fecha_modificacion: Date; //Date
    public readonly id_dispositivos: number;
    public readonly hostname: string;
    public readonly ceco_sap_ant: string;
    public readonly num_control_ant: number;
    public readonly id_movimiento: number;

    constructor(data: {
        id_usuario: number,
        fecha_modificacion: Date, //Date
        id_dispositivos: number,
        hostname: string,
        ceco_sap_ant: string,
        num_control_ant: number,
        id_movimiento: number,
        id_historial?: number,
    }) {
        Object.assign(this, data);
    }
} 