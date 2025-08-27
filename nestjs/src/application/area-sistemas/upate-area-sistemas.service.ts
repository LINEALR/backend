import { Inject, Injectable } from "@nestjs/common";
import { AreaSistemas } from "src/domain/area-sistemas/area-sistemas.entity";
import type { AreaSistemasRepositoryPort } from "src/ports/out/area-sistemas-repository.port";
import { AREA_SISTEMAS_REPOSITORY_PORT } from "src/ports/out/area-sistemas-repository.port";
import { UpdateAreaSistemas } from "src/ports/in/area-sistemas/update-area-sistemas.port";

@Injectable()
export class UpdateAreaSistemasService implements UpdateAreaSistemas {
    constructor(@Inject(AREA_SISTEMAS_REPOSITORY_PORT) private readonly repo: AreaSistemasRepositoryPort) {}
    
    async execute(id_area: number, area_sistemas: Partial<AreaSistemas>): Promise<AreaSistemas> {
        return await this.repo.update(id_area, area_sistemas);
    }
}