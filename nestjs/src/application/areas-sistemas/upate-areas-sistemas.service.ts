import { Inject, Injectable } from "@nestjs/common";
import { AreasSistemas } from "src/domain/areas-sistemas/areas-sistemas.entity";
import type { AreasSistemasRepositoryPort } from "src/ports/out/areas-sistemas-repository.port";
import { AREAS_SISTEMAS_REPOSITORY_PORT } from "src/ports/out/areas-sistemas-repository.port";
import { UpdateAreasSistemas } from "src/ports/in/areas-sistemas/update-areas-sistemas.port";

@Injectable()
export class UpdateAreasSistemasService implements UpdateAreasSistemas {
    constructor(@Inject(AREAS_SISTEMAS_REPOSITORY_PORT) private readonly repo: AreasSistemasRepositoryPort) {}
    
    async execute(id_area: number, area_sistemas: Partial<AreasSistemas>): Promise<AreasSistemas> {
        return await this.repo.update(id_area, area_sistemas);
    }
}