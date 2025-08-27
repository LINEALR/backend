import { Inject, Injectable } from "@nestjs/common";
import { AreaSistemas } from "src/domain/area-sistemas/area-sistemas.entity";
import { AreaSistemasRepository } from "src/domain/area-sistemas/area-sistemas.repository";
import { GetAreaSistemas } from "src/ports/in/area-sistemas/get-area-sistemas.port";
import type { AreaSistemasRepositoryPort } from "src/ports/out/area-sistemas-repository.port";
import { AREA_SISTEMAS_REPOSITORY_PORT } from "src/ports/out/area-sistemas-repository.port";

@Injectable()
export class GetAreaSistemasService implements GetAreaSistemas {
    constructor(@Inject(AREA_SISTEMAS_REPOSITORY_PORT) private readonly repo: AreaSistemasRepositoryPort) {} 

    async execute(search: Partial<AreaSistemas>): Promise<AreaSistemas[]> {
        const area_sistemas = await this.repo.get(search);
        if(!area_sistemas) {
            throw new Error(`Area con la información ${area_sistemas} no encontrada.`)
        }
        return area_sistemas;
    }
}