import { Colaboradores } from "./colaboradores.entity";

export interface ColaboradorRepositoy {
    getAll(): Promise <Colaboradores[]>;
    getById(id_colaborador: number): Promise<Colaboradores | null>;
    create(colaborador: Partial<Colaboradores>): Promise<Colaboradores>;
    update(colaborador: Colaboradores): Promise<Colaboradores>;
    delete(id_colaborador: number): Promise<void>;
}