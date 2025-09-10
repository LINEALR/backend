import { Inject, Injectable } from "@nestjs/common";
import type { AreasSistemasRepositoryPort } from "src/ports/out/areas-sistemas-repository.port";
import { AREAS_SISTEMAS_REPOSITORY_PORT } from "src/ports/out/areas-sistemas-repository.port";
import { DeleteAreasSistemas } from "src/ports/in/areas-sistemas/delete-areas-sistemas.port";

@Injectable()
export class DeleteAreasSistemasService implements DeleteAreasSistemas {
    constructor(@Inject(AREAS_SISTEMAS_REPOSITORY_PORT) private readonly repo: AreasSistemasRepositoryPort) {}

    async execute(id_area: number): Promise<void> {
        return await this.repo.delete(id_area);
    }
}