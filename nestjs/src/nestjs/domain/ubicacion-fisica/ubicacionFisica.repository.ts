import { UbicacionFisica } from "./ubicacionFisica.entity";

export interface UbicacionFisicaRepository {
    create(ubicacionFisica: UbicacionFisica): Promise<void>;
    getById(id_ubicacion: number): Promise<UbicacionFisica | null>;
    update(ubicacionFisica: UbicacionFisica): Promise<void>;
    delete(id_ubicacion: number): Promise<void>;
}