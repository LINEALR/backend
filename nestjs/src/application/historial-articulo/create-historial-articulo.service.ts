import { Inject, Injectable } from "@nestjs/common";
import { HistorialArticulo } from "src/domain/historial-articulo/historial-articulo.entity";
import { CreateHistorialArticulo } from "src/ports/in/historial-articulo/create-historial-articulo.port";
import { HISTORIAL_ARTICULO_REPOSITORY_PORT, type HistorialArticuloRepositoryPort } from "src/ports/out/historial-articulo.port";

@Injectable()
export class CreateHistorialArticuloService implements CreateHistorialArticulo {
    constructor(@Inject(HISTORIAL_ARTICULO_REPOSITORY_PORT) private readonly repo: HistorialArticuloRepositoryPort) {}

    async execute(historial_articulo: Partial<HistorialArticulo>): Promise<HistorialArticulo> {
        if(!historial_articulo.hostname) {
            throw new Error('Error')
        }
        ;return await this.repo.create(historial_articulo)
    }
}