import { UbicacionFisica } from "src/domain/ubicacion-fisica/ubicacion-fisica.entity";

export const UPDATE_UBICACION_FISICA_PORT = Symbol('UPDATE_UBICACION_FISICA_PORT');

export interface UpdateUbicacionFisica {
    execute(id_ubicacion: number, ubicacion_fisica: Partial<UbicacionFisica>): Promise<UbicacionFisica>;
}