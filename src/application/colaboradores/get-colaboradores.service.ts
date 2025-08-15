import { Inject, Injectable } from "@nestjs/common";
import { GetColaboradores } from "src/ports/in/colaboradores/get-colababoradores.port";
import type { ColaboradoresRepositoryPort } from "src/ports/out/colaboradores/colaborador-repository.port";
import { COLABORADORES_REPOSITORY_PORT } from "src/ports/out/colaboradores/colaborador-repository.port";
import { Colaboradores } from "src/domain/colaboradores/colaboradores.entity";

@Injectable()
export class GetColaboradoresService implements GetColaboradores {
    constructor(@Inject(COLABORADORES_REPOSITORY_PORT) private readonly repo: ColaboradoresRepositoryPort) { }

    async execute(id_colaborador: number): Promise<Colaboradores> {
        const colaborador = await this.repo.getById(id_colaborador);
        if (!colaborador) {
            throw new Error(`Colaborador con id ${id_colaborador} no encontrado`);
        }
        return colaborador;
    }
}