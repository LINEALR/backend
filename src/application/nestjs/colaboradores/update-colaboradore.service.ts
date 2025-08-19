import { Inject, Injectable } from "@nestjs/common";
import { Colaboradores } from "src/nestjs/domain/colaboradores/colaboradores.entity";
import type { ColaboradoresRepositoryPort } from "src/ports/out/nestjs/colaboradores/colaborador-repository.port";
import { COLABORADORES_REPOSITORY_PORT } from "src/ports/out/nestjs/colaboradores/colaborador-repository.port";
import { UpdateColaboradores } from "src/ports/in/nestjs/colaboradores/update-colaboradores.port";

@Injectable()
export class UpdateColaboradoresService implements UpdateColaboradores {
    constructor(@Inject(COLABORADORES_REPOSITORY_PORT) private readonly repo:ColaboradoresRepositoryPort ) {}
    
    async execute(id_colababoradores: number, data: Partial<Colaboradores>): Promise<Colaboradores> {
        return await this.repo.update(id_colababoradores, data);   
    }
}