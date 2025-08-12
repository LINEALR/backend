import { AreaSistemas } from "./areaSistemas.entity";

export interface AreaSistemasRepository {
    create(areaSistemas: AreaSistemas): Promise<void>;
    getById(id_area: number): Promise<AreaSistemas | null>;
    update(areaSistemas: AreaSistemas): Promise<void>;
    delete(id_area: number): Promise<void>;
}