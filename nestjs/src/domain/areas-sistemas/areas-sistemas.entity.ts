export class AreasSistemas {
    public id_area?: number;
    public ceco_sap: string;
    public descripcion_ceco: string;
    public area_sistemas: string;

    constructor(data: {
        ceco_sap: string,
        descripcion_ceco: string,
        area_sistemas: string,
        id_area?: number
    }) {
        Object.assign(this, data)
    }
}