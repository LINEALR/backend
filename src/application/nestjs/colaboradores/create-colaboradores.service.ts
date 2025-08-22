import { Inject, Injectable } from "@nestjs/common";
import { Colaboradores } from "src/nestjs/domain/colaboradores/colaboradores.entity";
import { CreateColaboradores } from "src/ports/in/nestjs/colaboradores/create-colaboradores.port";
import type { ColaboradoresRepositoryPort } from "src/ports/out/nestjs/colaborador-repository.port";
import { ColabroradorNotNameExeption } from "src/nestjs/domain/colaboradores/exeptions/colaborador-not-name.exeption";
import { COLABORADORES_REPOSITORY_PORT } from "src/ports/out/nestjs/colaborador-repository.port";

@Injectable()
export class CreateColaboradoresService implements CreateColaboradores {
    constructor(@Inject(COLABORADORES_REPOSITORY_PORT) private readonly repo: ColaboradoresRepositoryPort) {}

    async execute(data: Partial<Colaboradores>): Promise<Colaboradores> {
        if (!data.nombre) {
            throw new ColabroradorNotNameExeption();
        }
        return await this.repo.create(data);
    }
}