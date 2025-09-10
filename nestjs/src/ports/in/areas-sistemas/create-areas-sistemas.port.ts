import { AreasSistemas } from "src/domain/areas-sistemas/areas-sistemas.entity";

export const CREATE_AREAS_SISTEMAS_PORT = Symbol('CREATE_AREAS_SISTEMAS_PORT');

export interface CreateAreasSistemas {
    execute(area_sistemas: Partial<AreasSistemas>): Promise<AreasSistemas>;
}