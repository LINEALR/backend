import { Colaboradores } from "src/domain/colaboradores/colaboradores.entity";

export const GET_COLABORADORES_PORT = Symbol('GET_COLABORADORES_PORT')
export interface GetColaboradores {
    execute(id_colaboradores: number): Promise<Colaboradores | null>;
}