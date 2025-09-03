import { Inject, Injectable } from "@nestjs/common";
import { UbicacionFisica } from "src/domain/ubicacion-fisica/ubicacion-fisica.entity";
import { CreateUbicacionFisica } from "src/ports/in/ubicacion-fisica/create-ubicacion-fisica.port";
import { UBICACION_FISICA_REPOSITORY_PORT, type UbicacionFisicaRepositoryPort } from "src/ports/out/ubicacion-fisica-repository.port";

@Injectable()
export class CreateUbicacionFisicaService implements CreateUbicacionFisica {
    constructor(@Inject(UBICACION_FISICA_REPOSITORY_PORT) private readonly repo: UbicacionFisicaRepositoryPort) {}

    async execute(ubicacion_fisica: Partial<UbicacionFisica>): Promise<UbicacionFisica> {
        if (!ubicacion_fisica) {
            throw new Error('Error');
        }
        return await this.repo.create(ubicacion_fisica);
    }
}