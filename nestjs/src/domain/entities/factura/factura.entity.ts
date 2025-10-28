export class Factura {
    public readonly id_factura?: number;
    public codigo_propietario: number;
    public proveedor_alias: string;
    public razon_social: string;
    public folio_factura: string;
    public fact_so: string;
    public fecha_factura: Date; // Date
    public moneda: string;
    public unit_s_iva: number;

    constructor(data: {
        codigo_propietario: number,
        proveedor_alias: string,
        razon_social: string,
        folio_factura: string,
        fact_so: string,
        fecha_factura: Date, // Date
        moneda: string,
        unit_s_iva: number,
        id_factura?: number
    }) {
        Object.assign(this, data);
    }
}