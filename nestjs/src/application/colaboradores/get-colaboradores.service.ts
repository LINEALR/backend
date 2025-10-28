import { Inject, Injectable } from "@nestjs/common";
import { Colaboradores } from "src/domain/entities/colaboradores/colaboradores.entity";
import { GetColaboradores } from "src/ports/in/colaboradores/get-colababoradores.port";
import { COLABORADORES_REPOSITORY_PORT, type ColaboradoresRepositoryPort } from "src/ports/out/colaborador-repository.port";

@Injectable()
export class GetColaboradoresService implements GetColaboradores {
    constructor(@Inject(COLABORADORES_REPOSITORY_PORT) private readonly repo: ColaboradoresRepositoryPort) { }

    async execute(search: Partial<Colaboradores>, page = 1, pageSize = 10):
        Promise<{
            colaboradores: Colaboradores[];
            total: number;
            totalPages: number;
            currentPage: number;
        }> {
        const colaborador = await this.repo.get(search, page, pageSize);
        if (!colaborador) {
            throw new Error(`Colaborador con la informacion ${colaborador} no encontrado`);
        }
        return colaborador;
    }
}