import { Propietario } from "src/domain/entities/propietario/propietario.entity";

export const GET_PROPIETARIO_PORT = Symbol('GET_PROPIETARIO_PORT');

export interface GetPropietario {
    execute(search?: Partial<Propietario>, page?: number, pageSize?: number):
        Promise<{
            propietario: Propietario[];
            total: number;
            totalPages: number;
            currentPage: number;
        }>;
}