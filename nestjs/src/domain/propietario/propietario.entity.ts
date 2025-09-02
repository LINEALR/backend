export class Propietario {
    public readonly id_propietario?: number;
    public codigo_popietario: string;
    public nombre: string;

    constructor(data: {
        codigo_popietario: string,
        nombre: string,
        id_propietario?: number,
    }) {
        Object.assign(this, data);
    }
}