export const DELETE_DISPOSITIVOS_PORT = Symbol('DELETE_DISPOSITIVOS_PORT');

export interface DeleteDispositivos {
    execute(id_dispositivo: number): Promise<void>;
}