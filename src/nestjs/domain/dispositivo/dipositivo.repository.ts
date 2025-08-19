import { Dispositivo } from "./disposivo.entity";

export interface DispositivoRepository {
    create(disposivo: Dispositivo): Promise<void>;
    getById(id_dispositivo: number): Promise<Dispositivo | null>;
    upadte(dipsositivo: Dispositivo): Promise<void>;
    delete(id_dispositivo: number): Promise<void>;
}