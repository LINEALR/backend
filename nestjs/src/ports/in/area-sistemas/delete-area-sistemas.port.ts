export const DELETE_AREA_SISTEMAS_PORT = Symbol('DELETE_AREA_SISTEMAS_PORT');

export interface DeleteAreaSistemas {
    execute(id_area: number): Promise<void>;
}