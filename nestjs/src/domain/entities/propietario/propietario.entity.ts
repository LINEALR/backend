export class Propietario {
    public readonly id_propietario?: number;
    public codigo_propietario: number;
    public nombre: string;

    constructor(data: {
        codigo_propietario: number,
        nombre: string,
        id_propietario?: number,
    }) {
        Object.assign(this, data);
    }
}