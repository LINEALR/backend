import { Colaboradores } from "src/domain/colaboradores/colaboradores.entity";

export interface GetAllColaboradores{
    execute(): Promise<Colaboradores>[];
}