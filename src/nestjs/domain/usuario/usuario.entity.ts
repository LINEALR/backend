export class Usuario {
    constructor (
        public readonly id_usuario: number,
        public num_control: number,
        public id_rol: number,
        public contrasena: string,
        public status: boolean
    ) {}
}