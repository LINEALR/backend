import { Propietario } from "src/domain/entities/propietario/propietario.entity";

export const UPDATE_PROPIETARIO_PORT = Symbol('UPDATE_PROPIETARIO_PORT');

export interface UpdatePropietario {
    execute(id_propietario: number, propietario: Partial<Propietario>): Promise<Propietario>;
}