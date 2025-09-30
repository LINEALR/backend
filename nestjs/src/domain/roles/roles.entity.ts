export class Roles {
    public readonly id_roles?: number;
    public readonly nombre: string;

    constructor(data: {
        nombre: string,
        id_roles?: number,
    }) {
        Object.assign(this, data);
    }
}