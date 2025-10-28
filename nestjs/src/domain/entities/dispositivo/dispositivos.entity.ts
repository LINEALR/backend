export class Dispositivos {
        public readonly id_dispositivos?: number;
        public dispositivo: string;
        public descripcion_sistemas: string;
        public marca: string;
        public modelo: string;
        public num_serie: string;
        public num_cargador: string;
        public id_visual: string;
        public num_sap: number;
        public status: string;
        public extras: string;
        public id_area: number;
        public num_control: number;
        public codigo_propietario: number;
        public codigo_ubicacion: number;
        public  id_factura: number;

    constructor(data: {
        dispositivo: string,
        descripcion_sistemas: string,
        marca: string,
        modelo: string,
        num_serie: string,
        num_cargador: string,
        id_visual: string,
        num_sap: number,
        status: string,
        extras: string,
        id_area: number,
        num_control: number,
        codigo_propietario: number,
        codigo_ubicacion: number,
        id_factura: number,
        id_dispositivos?: number
    }) {
        Object.assign(this, data)
    }
}