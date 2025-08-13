import { Colaboradores } from "src/domain/colaboradores/colaboradores.entity";

export interface CreateColaboradores {
    execute(colaboradores: Partial<Colaboradores>): Promise<Colaboradores>;
}