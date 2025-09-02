export class Rol {
    public readonly id_rol?: number;
    public readonly nombre: string;

    constructor(data: {
        nombre: string;
        id_rol?: number;
    }) {
        Object.assign(this, data);
    }
}