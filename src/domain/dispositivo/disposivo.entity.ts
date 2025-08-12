export class Dispositivo {
    constructor (
        public readonly id_dispositivo: number,
        public dipsositivo: string,
        public descripcion_sistemas: string,
        public marca: string,
        public modelo: string, 
        public num_serie: string,
        public id_visual: string,
        public num_sap: number,
        public status: string,
        public extras: string,
        public is_area: number,
        public num_control: number,
        public codigo_propietario: number,
        public codigo_ubicacion: number,
        public readonly id_factura: number
    ) {}
}