import { Inject, Injectable } from "@nestjs/common";
import { Propietario } from "src/domain/entities/propietario/propietario.entity";
import { GetPropietario } from "src/ports/in/propietario/get-propietario.port";
import { PROPIETARO_REPOSITORY_PORT, type PropietarioRepositoryPort } from "src/ports/out/propietario-repository.port";

@Injectable()
export class GetPropietarioService implements GetPropietario {
    constructor(@Inject(PROPIETARO_REPOSITORY_PORT) private readonly repo: PropietarioRepositoryPort) { }

    async execute(search: Partial<Propietario>, page = 1, pageSize = 10):
        Promise<{
            propietario: Propietario[];
            total: number;
            totalPages: number;
            currentPage: number;
        }> {
        const propietario = await this.repo.get(search);

        if (!propietario) {
            throw new Error('Error');
        }
        return propietario;
    }
}