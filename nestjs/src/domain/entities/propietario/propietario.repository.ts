import { Propietario } from "./propietario.entity";

export interface PropietarioRepository {
    get(search: Partial<Propietario>, page?: number, pageSize?: number):
        Promise<{
            propietario: Propietario[];
            total: number;
            totalPages: number;
            currentPage: number;
        }>;
    create(propietario: Partial<Propietario>): Promise<Propietario>;
    update(id_propietario: number, propietario: Partial<Propietario>): Promise<Propietario>;
    delete(id_propietario: number): Promise<void>;
}