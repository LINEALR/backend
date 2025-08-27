import { Colaboradores } from "src/domain/colaboradores/colaboradores.entity";

export const GET_ALL_COLABORADORES_PORT = Symbol('GET_ALL_COLABORADORES_PORT');

export interface GetAllColaboradores{
    execute(): Promise<Colaboradores[]>;
}