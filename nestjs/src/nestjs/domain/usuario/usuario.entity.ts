export class Usuario {
        public readonly id_usuario?: number
        public num_control: number
        public id_rol: number
        public contrasena: string
        public status: boolean

    constructor(data: {
        num_control: number;
        id_rol: number;
        contrasena: string;
        status: boolean;
        id_usuario?: number;
    }) {
        Object.assign(this, data)
    }
}