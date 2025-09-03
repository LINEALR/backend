import { Inject, Injectable } from "@nestjs/common";
import { Propietario } from "src/domain/propietario/propietario.entity";
import { CreatePropietario } from "src/ports/in/propietario/create-propietario.port";
import { PROPIETARO_REPOSITORY_PORT, type PropietarioRepositoryPort } from "src/ports/out/propietario-repository.port";

@Injectable()
export class CreatePropietarioService implements CreatePropietario {
    constructor(@Inject(PROPIETARO_REPOSITORY_PORT) private readonly repo: PropietarioRepositoryPort) { }

    async execute(propietario: Partial<Propietario>): Promise<Propietario> {
        if (!propietario.codigo_propietario) {
            throw new Error('Error')
        }
        return await this.repo.create(propietario);
    }
}