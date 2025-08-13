import { Injectable } from "@nestjs/common";
import { CreateColaboradores } from "src/ports/in/colaboradores/create-colaboradores.port";
import type { ColaboradorRepositoyPort } from "src/ports/out/colaboradores/colaborador-repository.port";
import { Colaboradores } from "src/domain/colaboradores/colaboradores.entity";

@Injectable()
export class CreateColaboradoresService implements CreateColaboradores {
    constructor(private readonly repo: ColaboradorRepositoyPort) {}

    async execute(colaborador: Partial<Colaboradores>): Promise<Colaboradores> {
        if (!colaborador.nombre) throw new Error("El nombre es obligatorio");
        return await this.repo.create(colaborador);
    }
}