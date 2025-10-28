import { Propietario } from "src/domain/entities/propietario/propietario.entity";

export const CREATE_PROPIETARIO_PORT = Symbol('CREATE_PROPIETARIO_PORT');

export interface CreatePropietario {
    execute(propietario: Partial<Propietario>): Promise<Propietario>;
}