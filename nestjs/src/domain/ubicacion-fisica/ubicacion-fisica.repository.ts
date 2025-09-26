import { UbicacionFisica } from "./ubicacion-fisica.entity";

export interface UbicacionFisicaRepository {
    get(search: Partial<UbicacionFisica>, page?: number, pageSize?: number):
        Promise<{
            ubicacionFisica: UbicacionFisica[];
            total: number;
            totalPages: number;
            currentPage: number;
        }>;
    create(ubicacion_fisica: Partial<UbicacionFisica>): Promise<UbicacionFisica>;
    update(id_ubicacion: number, ubicacion_fisica: Partial<UbicacionFisica>): Promise<UbicacionFisica>;
    delete(id_ubicacion: number): Promise<void>;
}