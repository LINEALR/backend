import { Inject, Injectable } from "@nestjs/common";
import { UbicacionFisica } from "src/domain/ubicacion-fisica/ubicacion-fisica.entity";
import { GetUbicacionFisica } from "src/ports/in/ubicacion-fisica/get-ubicacion-fisica.port";
import { UBICACION_FISICA_REPOSITORY_PORT, type UbicacionFisicaRepositoryPort } from "src/ports/out/ubicacion-fisica-repository.port";

@Injectable()
export class GetUbicacionFisicaService implements GetUbicacionFisica {
    constructor(@Inject(UBICACION_FISICA_REPOSITORY_PORT) private readonly repo: UbicacionFisicaRepositoryPort) {}

    async execute(search: Partial<UbicacionFisica>): Promise<UbicacionFisica[]> {
        const ubicacion_fisica = await this.repo.get(search);
        if (!ubicacion_fisica) {
            throw new Error('Error');
        }
        return ubicacion_fisica;
    }
}