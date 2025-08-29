export class ArticuloSistemas {
    public id_articulo?: number;
    public codigo_articulo;
    public descripcion: string;
    public identificador: string;
    public consecutivo: number;

    constructor(data: {
        codigo_articulo: number,
        descripcion: string,
        identificador: string,
        consecutivo: number,
        id_articulo?: number
    }) {
        Object.assign(this, data);
    }
}