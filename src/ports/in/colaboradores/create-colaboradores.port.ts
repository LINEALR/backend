import { Colaboradores } from "src/domain/colaboradores/colaboradores.entity";

export const CREATE_COLABORADORES_PORT = Symbol('GET_COLABORADORES_PORT')
export interface CreateColaboradores {
    execute(colaboradores: Partial<Colaboradores>): Promise<Colaboradores>;
}