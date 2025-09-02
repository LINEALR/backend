export class UbicacionFisica {
    public readonly id_ubicacion?: number;
    public codigo_ubicacion: string;
    public descripcion: string;

    constructor(data: {
        codigo_ubicacion: string;
        descripcion: string;
        id_ubicacion?: number;
    }) {
        Object.assign(this, data);
    }
}