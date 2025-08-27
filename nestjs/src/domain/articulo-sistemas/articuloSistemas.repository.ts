import { AreaSistemas } from "../area-sistemas/area-sistemas.entity";
import { ArticuloSistemas } from "./articuloSistemas.entity"; 

export interface ArticuloSistemasRepository {
    create(articuloSistemas: ArticuloSistemas): Promise<void>;
    getById(id_articulo: number): Promise<AreaSistemas | null>;
    update(areaSistemas: AreaSistemas): Promise<void>;
    delete(id_articulo: number): Promise<void>;
}