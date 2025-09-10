export const DELETE_AREAS_SISTEMAS_PORT = Symbol('DELETE_AREAS_SISTEMAS_PORT');

export interface DeleteAreasSistemas {
    execute(id_area: number): Promise<void>;
}