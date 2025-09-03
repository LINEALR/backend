import { Inject, Injectable } from "@nestjs/common";
import { DeleteUbicacionFisica } from "src/ports/in/ubicacion-fisica/delete-ubicacion-fisica.port";
import { UBICACION_FISICA_REPOSITORY_PORT, type UbicacionFisicaRepositoryPort } from "src/ports/out/ubicacion-fisica-repository.port";

@Injectable()
export class DeleteUbicacionFisicaService implements DeleteUbicacionFisica {
    constructor(@Inject(UBICACION_FISICA_REPOSITORY_PORT) private readonly repo: UbicacionFisicaRepositoryPort) {}

    async execute(id_ubicacion: number): Promise<void> {
        return await this.repo.delete(id_ubicacion);
    }
}