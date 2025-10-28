import { Inject, Injectable } from "@nestjs/common";
import { UbicacionFisica } from "src/domain/entities/ubicacion-fisica/ubicacion-fisica.entity";
import { UpdateUbicacionFisica } from "src/ports/in/ubicacion-fisica/update-ubicacion-fisica.port";
import { UBICACION_FISICA_REPOSITORY_PORT, type UbicacionFisicaRepositoryPort } from "src/ports/out/ubicacion-fisica-repository.port";

@Injectable()
export class UpdateUbicacionFisicaService implements UpdateUbicacionFisica {
    constructor(@Inject(UBICACION_FISICA_REPOSITORY_PORT) private readonly repo: UbicacionFisicaRepositoryPort) {}

    async execute(id_ubicacion: number, ubicacion_fisica: Partial<UbicacionFisica>): Promise<UbicacionFisica> {
        return await this.repo.update(id_ubicacion, ubicacion_fisica);
    }
}