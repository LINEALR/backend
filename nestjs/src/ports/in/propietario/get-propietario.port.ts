import { Propietario } from "src/domain/propietario/propietario.entity";

export const GET_PROPIETARIO_PORT = Symbol('GET_PROPIETARIO_PORT');

export interface GetPropietario {
    execute(search?: Partial<Propietario>): Promise<Propietario[]>;
}