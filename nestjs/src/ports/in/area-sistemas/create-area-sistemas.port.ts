import { AreaSistemas } from "src/domain/area-sistemas/area-sistemas.entity";

export const CREATE_AREA_SISTEMAS_PORT = Symbol('CREATE_AREA_SISTEMAS_PORT');

export interface CreateAreaSistemas {
    execute(area_sistemas: Partial<AreaSistemas>): Promise<AreaSistemas>;
}