import { ColaboradorRepositoy } from "../colaboradores.repository";
import { Colaborador } from "../colaboradores.entity";
import { ExepcionGenerica } from "../exeptions/exepcionGenerica.exeption";

export class ColaboradorService {
    constructor(private readonly colaboradorRepository: ColaboradorRepositoy) {}

    async getAllColaborador(): Promise<Colaborador[]>{
        return this.colaboradorRepository.getAll();
    }

    async getColaborador(id_colaborador: number): Promise<Colaborador> {
        const colaborador = await this.colaboradorRepository.getById(id_colaborador);
        if (!colaborador) throw new ExepcionGenerica('Usuario no encontrado');
        return colaborador;
    }

    async createColaborador(colaborador: Colaborador): Promise<Colaborador> {
        return this.colaboradorRepository.create(colaborador);
    }

    async updateColaborador(colaborador: Colaborador): Promise<Colaborador>{
        return this.colaboradorRepository.update(colaborador);
    }

    async deleteColaborador(id_colaborador: number): Promise<void> {
        return this.colaboradorRepository.delete(id_colaborador);
    }
}