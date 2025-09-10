import { Inject, Injectable } from "@nestjs/common";
import { AreasSistemas } from "src/domain/areas-sistemas/areas-sistemas.entity";
import { GetAreasSistemas } from "src/ports/in/areas-sistemas/get-areas-sistemas.port";
import type { AreasSistemasRepositoryPort } from "src/ports/out/areas-sistemas-repository.port";
import { AREAS_SISTEMAS_REPOSITORY_PORT } from "src/ports/out/areas-sistemas-repository.port";

@Injectable()
export class GetAreasSistemasService implements GetAreasSistemas {
    constructor(@Inject(AREAS_SISTEMAS_REPOSITORY_PORT) private readonly repo: AreasSistemasRepositoryPort) {} 

    async execute(search: Partial<AreasSistemas>): Promise<AreasSistemas[]> {
        const area_sistemas = await this.repo.get(search);
        if(!area_sistemas) {
            throw new Error(`Area con la información ${area_sistemas} no encontrada.`)
        }
        return area_sistemas;
    }
}