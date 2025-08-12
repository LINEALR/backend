import { Colaborador } from "./colaboradores.entity";

export interface ColaboradorRepositoy {
    getAll(): Promise <Colaborador[]>;
    getById(id_colaborador: number): Promise<Colaborador | null>;
    create(colaborador: Colaborador): Promise<Colaborador>;
    update(colaborador: Colaborador): Promise<Colaborador>;
    delete(id_colaborador: number): Promise<void>;
}