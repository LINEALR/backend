import { Inject, Injectable } from "@nestjs/common";
import { AreasSistemas } from "src/domain/areas-sistemas/areas-sistemas.entity";
import { CreateAreasSistemas } from "src/ports/in/areas-sistemas/create-areas-sistemas.port";
import type { AreasSistemasRepositoryPort } from "src/ports/out/areas-sistemas-repository.port";
import { AREAS_SISTEMAS_REPOSITORY_PORT } from "src/ports/out/areas-sistemas-repository.port";

@Injectable()
export class CreateAreasSistemasService implements CreateAreasSistemas {
    constructor(@Inject(AREAS_SISTEMAS_REPOSITORY_PORT) private readonly repo: AreasSistemasRepositoryPort) {}

    async execute(area_sistemas: Partial<AreasSistemas>): Promise<AreasSistemas> {
        if(!area_sistemas.area_sistemas) {
            throw new Error('Erro al crear area');
        }
        return await this.repo.create(area_sistemas);
    }
}