import { Inject, Injectable } from "@nestjs/common";
import { AreaSistemas } from "src/domain/area-sistemas/area-sistemas.entity";
import { CreateAreaSistemas } from "src/ports/in/area-sistemas/create-area-sistemas.port";
import type { AreaSistemasRepositoryPort } from "src/ports/out/area-sistemas-repository.port";
import { AREA_SISTEMAS_REPOSITORY_PORT } from "src/ports/out/area-sistemas-repository.port";

@Injectable()
export class CreateAreaSistemasService implements CreateAreaSistemas {
    constructor(@Inject(AREA_SISTEMAS_REPOSITORY_PORT) private readonly repo: AreaSistemasRepositoryPort) {}

    async execute(area_sistemas: Partial<AreaSistemas>): Promise<AreaSistemas> {
        if(!area_sistemas.area_sistemas) {
            throw new Error('Erro al crear area');
        }
        return await this.repo.create(area_sistemas);
    }
}