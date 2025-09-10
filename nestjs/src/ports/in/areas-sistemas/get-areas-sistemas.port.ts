import { AreasSistemas } from "src/domain/areas-sistemas/areas-sistemas.entity";

export const GET_AREAS_SISTEMAS_PORT = Symbol('GET_AREAS_SISTEMAS_PORT');

export interface GetAreasSistemas { 
    execute(search?: Partial<AreasSistemas>): Promise<AreasSistemas[]>;
}