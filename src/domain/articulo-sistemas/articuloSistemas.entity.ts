export class ArticuloSistemas {
    constructor (
        public readonly id_articulo: number,
        public codigo_articulo: number,
        public descripcion: string,
        public identificador: string,
        public consecutivo: number
    ) {}
}