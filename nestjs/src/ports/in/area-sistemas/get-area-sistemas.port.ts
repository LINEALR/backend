import { AreaSistemas } from "src/domain/area-sistemas/area-sistemas.entity";

export const GET_AREA_SISTEMAS_PORT = Symbol('GET_AREA_SISTEMAS_PORT');

export interface GetAreaSistemas { 
    execute(search?: Partial<AreaSistemas>): Promise<AreaSistemas[]>;
}