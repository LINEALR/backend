import { UbicacionFisica } from "src/domain/entities/ubicacion-fisica/ubicacion-fisica.entity";

export const CREATE_UBICACION_FISICA_PORT = Symbol('CREATE_UBICACION_FISICA_PORT');

export interface CreateUbicacionFisica {
    execute(ubicacion_fisica: Partial<UbicacionFisica>): Promise<UbicacionFisica>;
}