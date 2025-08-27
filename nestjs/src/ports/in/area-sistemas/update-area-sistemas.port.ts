import { AreaSistemas } from "src/domain/area-sistemas/area-sistemas.entity";

export const UPDATE_AREA_SISTEMAS_PORT = Symbol('UPDATE_AREA_SISTEMAS_PORT');

export interface UpdateAreaSistemas {
    execute(id_area: number, area_sistemas: Partial<AreaSistemas>): Promise<AreaSistemas>;
}