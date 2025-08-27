import { Inject, Injectable } from "@nestjs/common";
import { Colaboradores } from "src/domain/colaboradores/colaboradores.entity";
import { GetColaboradores } from "src/ports/in/colaboradores/get-colababoradores.port";
import type { ColaboradoresRepositoryPort } from "src/ports/out/colaborador-repository.port";
import { COLABORADORES_REPOSITORY_PORT } from "src/ports/out/colaborador-repository.port";

@Injectable()
export class GetColaboradoresService implements GetColaboradores {
    constructor(@Inject(COLABORADORES_REPOSITORY_PORT) private readonly repo: ColaboradoresRepositoryPort) {}

    async execute(search: Partial<Colaboradores>): Promise<Colaboradores[]> {
        const colaborador = await this.repo.get(search);
        if (!colaborador) {
            throw new Error(`Colaborador con la informacion ${colaborador} no encontrado`);
        }
        return colaborador;
    }
}