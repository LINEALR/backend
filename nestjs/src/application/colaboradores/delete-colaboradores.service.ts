import { Inject, Injectable } from "@nestjs/common";
import type { ColaboradoresRepositoryPort } from "src/ports/out/colaborador-repository.port";
import { COLABORADORES_REPOSITORY_PORT } from "src/ports/out/colaborador-repository.port";
import { DeleteColaboradores } from "src/ports/in/colaboradores/delete-colaboradores.port";

@Injectable()
export class DeleteColaboradoresService implements DeleteColaboradores {
    constructor(@Inject(COLABORADORES_REPOSITORY_PORT) private readonly repo: ColaboradoresRepositoryPort) {}

    async execute(id_colababoradores: number): Promise<void> {
        return await this.repo.delete(id_colababoradores);
    }
}