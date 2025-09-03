import { Inject, Injectable } from "@nestjs/common";
import { DeletePropietario } from "src/ports/in/propietario/delete-propietario,port";
import { PROPIETARO_REPOSITORY_PORT, type PropietarioRepositoryPort } from "src/ports/out/propietario-repository.port";

@Injectable()
export class DeletePropietarioService implements DeletePropietario {
    constructor(@Inject(PROPIETARO_REPOSITORY_PORT) private readonly repo: PropietarioRepositoryPort) {}

    async execute(id_propietario: number): Promise<void> {
        return await this.repo.delete(id_propietario);
    }
}