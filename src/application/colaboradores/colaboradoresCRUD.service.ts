import { ColaboradoresRepository } from "../../domain/colaboradores/colaboradores.repository";
import { Colaboradores } from "../../domain/colaboradores/colaboradores.entity";
import { ExepcionGenerica } from "../../domain/colaboradores/exeptions/exepcionGenerica.exeption";

export class ColaboradorService {
    constructor(private readonly colaboradorRepository: ColaboradoresRepository) {}

    async getAllColaborador(): Promise<Colaboradores[]>{
        return this.colaboradorRepository.getAll();
    }


    async getColaborador(id_colaborador: number): Promise<Colaboradores> {
        const colaborador = await this.colaboradorRepository.getById(id_colaborador);
        if (!colaborador) throw new ExepcionGenerica('Usuario no encontrado');
        return colaborador;
    }
    async createColaborador(colaborador: Colaboradores): Promise<Colaboradores> {
        return this.colaboradorRepository.create(colaborador);
    }

    async updateColaborador(colaborador: Colaboradores): Promise<Colaboradores>{
        return this.colaboradorRepository.update(colaborador);
    }

    async deleteColaborador(id_colaborador: number): Promise<void> {
        return this.colaboradorRepository.delete(id_colaborador);
    }
}