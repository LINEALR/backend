import { Inject, Injectable } from "@nestjs/common";
import { DeleteColaboradores } from "src/ports/in/colaboradores/delete-colaboradores.port";
import { COLABORADORES_REPOSITORY_PORT, type ColaboradoresRepositoryPort } from "src/ports/out/colaborador-repository.port";

@Injectable()
export class DeleteColaboradoresService implements DeleteColaboradores {
    constructor(@Inject(COLABORADORES_REPOSITORY_PORT) private readonly repo: ColaboradoresRepositoryPort) {}

    async execute(id_colababoradores: number): Promise<void> {
        return await this.repo.delete(id_colababoradores);
    }
}