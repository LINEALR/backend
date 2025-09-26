import { Colaboradores } from "src/domain/colaboradores/colaboradores.entity";

export const GET_COLABORADORES_PORT = Symbol('GET_COLABORADORES_PORT');

export interface GetColaboradores {
    execute(search?: Partial<Colaboradores>, page?: number, pageSize?: number):
        Promise<{
            colaboradores: Colaboradores[];
            total: number;
            totalPages: number;
            currentPage: number;
        }>;
}