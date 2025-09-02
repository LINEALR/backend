import { Dispositivos } from "./dispositivos.entity";

export interface DispositivosRepository {
    get(search: Partial<Dispositivos>): Promise<Dispositivos[]>;
    create(disposivo: Partial<Dispositivos>): Promise<Dispositivos>;
    upadte(id_dispositivo: number, dipsositivo: Partial<Dispositivos>): Promise<Dispositivos>;
    delete(id_dispositivo: number): Promise<void>;
}