import { Colaboradores } from "./colaboradores.entity";
export interface ColaboradoresRepository {
    getAll(): Promise <Colaboradores[]>;
    get(search: Partial<Colaboradores>): Promise<Colaboradores[]>;
    create(colaborador: Partial<Colaboradores>): Promise<Colaboradores>;
    update(id_colaboradores: number, colaborador: Partial<Colaboradores>): Promise<Colaboradores>;
    delete(id_colaborador: number): Promise<void>;
}