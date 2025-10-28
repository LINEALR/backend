import { Dispositivos } from "./dispositivos.entity";

export interface DispositivosRepository {
    get(search: Partial<Dispositivos>, page?: number, pageSize?: number):
        Promise<{
            dispositivos: Dispositivos[];
            total: number;
            totalPages: number;
            currentPage: number;
        }>;
    create(disposivo: Partial<Dispositivos>): Promise<Dispositivos>;
    upadte(id_dispositivo: number, dipsositivo: Partial<Dispositivos>): Promise<Dispositivos>;
    delete(id_dispositivo: number): Promise<void>;
}