export class UbicacionFisica {
    public readonly id_ubicacion?: number;
    public codigo_ubicacion: number;
    public descripcion: string;

    constructor(data: {
        codigo_ubicacion: number;
        descripcion: string;
        id_ubicacion?: number;
    }) {
        Object.assign(this, data);
    }
}