import { Inject, Injectable } from "@nestjs/common";
import { GetAllColaboradores } from "src/ports/in/colaboradores/get-all-colaboradores.ports";
import type { ColaboradoresRepositoryPort } from "src/ports/out/colaborador-repository.port";
import { COLABORADORES_REPOSITORY_PORT } from "src/ports/out/colaborador-repository.port";
import { Colaboradores } from "src/domain/colaboradores/colaboradores.entity";

@Injectable()
export class GetAllColaboradoresService implements GetAllColaboradores {
    constructor(@Inject(COLABORADORES_REPOSITORY_PORT) private readonly repo: ColaboradoresRepositoryPort) {}

    async execute(): Promise<Colaboradores[]> {
        return await this.repo.getAll();
    }
}