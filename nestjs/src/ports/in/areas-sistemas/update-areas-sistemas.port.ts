import { AreasSistemas } from "src/domain/entities/areas-sistemas/areas-sistemas.entity";

export const UPDATE_AREAS_SISTEMAS_PORT = Symbol('UPDATE_AREAS_SISTEMAS_PORT');

export interface UpdateAreasSistemas {
    execute(id_area: number, area_sistemas: Partial<AreasSistemas>): Promise<AreasSistemas>;
}