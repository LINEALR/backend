import { Colaborador } from "src/domain/colaboradores/colaboradores.entity";

export interface CreateColaborador {
    execute(colaborador: Partial<Colaborador>): Promise<Colaborador>;
}