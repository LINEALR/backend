import { Colaboradores } from "./colaboradores.entity";
export interface ColaboradoresRepository {
    get(search: Partial<Colaboradores>, page?: number, pageSize?: number):
        Promise<{
            colaboradores: Colaboradores[];
            total: number;
            totalPages: number;
            currentPage: number;
        }>;
    create(colaborador: Partial<Colaboradores>): Promise<Colaboradores>;
    update(id_colaboradores: number, colaborador: Partial<Colaboradores>): Promise<Colaboradores>;
    delete(id_colaborador: number): Promise<void>;
}