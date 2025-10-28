import { Inject, Injectable } from "@nestjs/common";
import { Propietario } from "src/domain/entities/propietario/propietario.entity";
import { UpdatePropietario } from "src/ports/in/propietario/update-propietario.port";
import { PROPIETARO_REPOSITORY_PORT, type PropietarioRepositoryPort } from "src/ports/out/propietario-repository.port";

@Injectable()
export class UpdatePropietarioService implements UpdatePropietario {
    constructor(@Inject(PROPIETARO_REPOSITORY_PORT) private readonly repo: PropietarioRepositoryPort) {}

    async execute(id_propietario: number, propietario: Partial<Propietario>): Promise<Propietario> {
        return await this.repo.update(id_propietario, propietario);
    }
}