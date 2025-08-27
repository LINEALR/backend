import { Inject, Injectable } from "@nestjs/common";
import type { AreaSistemasRepositoryPort } from "src/ports/out/area-sistemas-repository.port";
import { AREA_SISTEMAS_REPOSITORY_PORT } from "src/ports/out/area-sistemas-repository.port";
import { DeleteAreaSistemas } from "src/ports/in/area-sistemas/delete-area-sistemas.port";

@Injectable()
export class DeleteAreaSistemasService implements DeleteAreaSistemas {
    constructor(@Inject(AREA_SISTEMAS_REPOSITORY_PORT) private readonly repo: AreaSistemasRepositoryPort) {}

    async execute(id_area: number): Promise<void> {
        return await this.repo.delete(id_area);
    }
}