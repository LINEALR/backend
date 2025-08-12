import { Propietario } from "../propietario/propietario.entity";

export interface PropietarioRepository {
    create(propietario: Propietario): Promise<void>;
    getById(id_propietario: number): Promise<void>;
    update(propietario: Propietario): Promise<void>;
    delete(id_propietario: number): Promise<void>;
}