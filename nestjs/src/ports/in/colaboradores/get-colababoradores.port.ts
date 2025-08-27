import { Colaboradores } from "src/domain/colaboradores/colaboradores.entity";
import { GetColaboradoresDto } from "src/adapters/in/http/colaboradores/dtos/get-colaboradores.dto";

export const GET_COLABORADORES_PORT = Symbol('GET_COLABORADORES_PORT');

export interface GetColaboradores {
    execute(search?: GetColaboradoresDto): Promise<Colaboradores[] | null>;
}