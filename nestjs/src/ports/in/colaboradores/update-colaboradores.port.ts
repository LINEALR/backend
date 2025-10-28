import { Colaboradores } from "src/domain/entities/colaboradores/colaboradores.entity";

export const UPDATE_COLABORADORES_PORT = Symbol('UPDATE_COLABORADORES_PORT');

export interface UpdateColaboradores {
    execute(id_colaboradores: number, colaboradores: Partial<Colaboradores>): Promise<Colaboradores>;
}