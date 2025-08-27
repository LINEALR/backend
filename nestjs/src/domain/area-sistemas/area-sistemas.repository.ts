import { AreaSistemas } from "./area-sistemas.entity";

export interface AreaSistemasRepository {
    get(search: Partial<AreaSistemas>): Promise<AreaSistemas[]>;
    create(area_sistemas: Partial <AreaSistemas>): Promise<AreaSistemas>;
    update(id_area: number, area_sistemas: Partial<AreaSistemas>): Promise<AreaSistemas>;
    delete(id_area: number): Promise<void>;
}