import { UbicacionFisica } from "src/domain/ubicacion-fisica/ubicacion-fisica.entity";

export const GET_UBICACION_FISICA_PORT = Symbol('GET_UBICACION_FISICA_PORT');

export interface GetUbicacionFisica {
    execute(search?: Partial<UbicacionFisica>): Promise<UbicacionFisica[]>;
}