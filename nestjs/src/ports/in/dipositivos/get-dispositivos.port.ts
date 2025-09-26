import { Dispositivos } from "src/domain/dispositivo/dispositivos.entity";

export const GET_DISPOSITIVOS_PORT = Symbol('GET_DISPOSITIVOS_PORT');

export interface GetDispositivos {
    execute(disposivos?: Partial<Dispositivos>, page?: number, pageSize?: number):
        Promise<{
            dispositivos: Dispositivos[];
            total: number;
            totalPages: number;
            currentPage: number;
        }>;
}