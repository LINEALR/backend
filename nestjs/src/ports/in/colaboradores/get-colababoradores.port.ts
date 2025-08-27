import { Colaboradores } from "src/domain/colaboradores/colaboradores.entity";

export const GET_COLABORADORES_PORT = Symbol('GET_COLABORADORES_PORT');

export interface GetColaboradores {
    execute(search?: Partial<Colaboradores>): Promise<Colaboradores[]>;
}