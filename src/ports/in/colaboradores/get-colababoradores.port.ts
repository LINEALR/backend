import { Colaboradores } from "src/domain/colaboradores/colaboradores.entity";

export interface GetColaboradores {
    execute(id_colaboradores: number): Promise<Colaboradores> | null;
}