export const DELETE_UBICACION_FISICA_PORT = Symbol('DELETE_UBICACION_FISICA_PORT');

export interface DeleteUbicacionFisica {
    execute(id_ubicacion: number): Promise<void>;
}