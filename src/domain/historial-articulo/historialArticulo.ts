export class HistorialArticulo {
    constructor (
        public readonly id_historial: number,
        public readonly id_usuario: number,
        public readonly fecha_modificacion: string, //Date
        public readonly id_dispositivos: number,
        public readonly hostname: string,
        public readonly ceco_sap_ant: string,
        public readonly num_conrol_ant: number,
        public readonly id_moimiento: number
    ) {}
} 