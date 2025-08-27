import { Inject, Injectable } from "@nestjs/common";
import { GetColaboradores } from "src/ports/in/nestjs/colaboradores/get-colababoradores.port";
import type { ColaboradoresRepositoryPort } from "src/ports/out/nestjs/colaborador-repository.port";
import { COLABORADORES_REPOSITORY_PORT } from "src/ports/out/nestjs/colaborador-repository.port";
import { Colaboradores } from "src/nestjs/domain/colaboradores/colaboradores.entity";

@Injectable()
export class GetColaboradoresService implements GetColaboradores {
    constructor(@Inject(COLABORADORES_REPOSITORY_PORT) private readonly repo: ColaboradoresRepositoryPort) {}

    async execute(search: Partial<Colaboradores>): Promise<Colaboradores[] | null> {
        const colaborador = await this.repo.get(search);
        if (!colaborador) {
            throw new Error(`Colaborador con la informacion ${colaborador} no encontrado`);
        }
        return colaborador;
    }
}