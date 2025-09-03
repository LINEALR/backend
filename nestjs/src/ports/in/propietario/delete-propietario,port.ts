export const DELETE_PROPIETARIO_PORT = Symbol('DELETE_PROPIETARIO_PORT');

export interface DeletePropietario {
    execute(id_propietario: number): Promise<void>;
}