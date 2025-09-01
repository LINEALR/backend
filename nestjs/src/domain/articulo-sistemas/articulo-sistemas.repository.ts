import { ArticuloSistemas } from "./articulo-sistemas.entity"; 

export interface ArticuloSistemasRepository {
    get(search: Partial<ArticuloSistemas>): Promise<ArticuloSistemas[]>;
    create(articuloSistemas: Partial<ArticuloSistemas>): Promise<ArticuloSistemas>;
    update(id_articulo: number, articulo_sistemas: Partial<ArticuloSistemas>): Promise<ArticuloSistemas>;
    delete(id_articulo: number): Promise<void>;
}