import { Inject, Injectable } from "@nestjs/common";
import { Colaboradores } from "src/domain/entities/colaboradores/colaboradores.entity";
import { UpdateColaboradores } from "src/ports/in/colaboradores/update-colaboradores.port";
import { COLABORADORES_REPOSITORY_PORT, type ColaboradoresRepositoryPort } from "src/ports/out/colaborador-repository.port";

@Injectable()
export class UpdateColaboradoresService implements UpdateColaboradores {
    constructor(@Inject(COLABORADORES_REPOSITORY_PORT) private readonly repo: ColaboradoresRepositoryPort) {}
    
    async execute(id_colababoradores: number, colababorador: Partial<Colaboradores>): Promise<Colaboradores> {
        return await this.repo.update(id_colababoradores, colababorador);   
    }
}