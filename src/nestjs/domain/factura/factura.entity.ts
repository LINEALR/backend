export class Factura {
    constructor (
        public readonly id_factura: number,
        public readonly codigo_propietario: number,
        public readonly proveedor_alias: string,
        public readonly razon_social: string,
        public readonly folio_factura: string,
        public readonly fact_so: string,
        public readonly fecha_factura: string, // Date
        public readonly moneda: string,
        public readonly unit_s_iva: number
    ) {}
}