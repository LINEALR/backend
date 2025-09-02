import { Propietario } from "./propietario.entity";

export interface PropietarioRepository {
    get(search: Partial<Propietario>): Promise<Propietario[]>;
    create(propietario: Partial<Propietario>): Promise<Propietario>;
    update(id_propietario: number, propietario: Partial<Propietario>): Promise<Propietario>;
    delete(id_propietario: number): Promise<void>;
}