import { Inject, Injectable } from "@nestjs/common";
import { Colaboradores } from "src/domain/entities/colaboradores/colaboradores.entity";
import { CreateColaboradores } from "src/ports/in/colaboradores/create-colaboradores.port";
import { COLABORADORES_REPOSITORY_PORT, type ColaboradoresRepositoryPort } from "src/ports/out/colaborador-repository.port";
import { ColabroradorNotNameExeption } from "src/domain/entities/colaboradores/exeptions/colaborador-not-name.exeption";

@Injectable()
export class CreateColaboradoresService implements CreateColaboradores {
    constructor(@Inject(COLABORADORES_REPOSITORY_PORT) private readonly repo: ColaboradoresRepositoryPort) {}

    async execute(colaborador: Partial<Colaboradores>): Promise<Colaboradores> {
        if (!colaborador.nombre) {
            throw new ColabroradorNotNameExeption();
        }
        return await this.repo.create(colaborador);
    }
}