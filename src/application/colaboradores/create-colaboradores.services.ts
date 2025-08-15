import { Inject, Injectable } from "@nestjs/common";
import { CreateColaboradores } from "src/ports/in/colaboradores/create-colaboradores.port";
import type { ColaboradoresRepositoryPort } from "src/ports/out/colaboradores/colaborador-repository.port";
import { COLABORADORES_REPOSITORY_PORT } from "src/ports/out/colaboradores/colaborador-repository.port";
import { Colaboradores } from "src/domain/colaboradores/colaboradores.entity";

@Injectable()
export class CreateColaboradoresService implements CreateColaboradores {
    constructor(@Inject(COLABORADORES_REPOSITORY_PORT) private readonly repo: ColaboradoresRepositoryPort) {}

    async execute(data: Partial<Colaboradores>): Promise<Colaboradores> {
        if (!data.nombre) throw new Error("El nombre es obligatorio");
        return await this.repo.create(data);
    }
}