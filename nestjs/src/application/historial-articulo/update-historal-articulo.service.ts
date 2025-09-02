import { Inject, Injectable } from "@nestjs/common";
import { HistorialArticulo } from "src/domain/historial-articulo/historial-articulo.entity";
import { UpdateHistorialArticulo } from "src/ports/in/historial-articulo/update-historial-articulo.port";
import { HISTORIAL_ARTICULO_REPOSITORY_PORT, type HistorialArticuloRepositoryPort } from "src/ports/out/historial-articulo.port";

@Injectable()
export class UpdateHistorialArticuloService implements UpdateHistorialArticulo {
    constructor(@Inject(HISTORIAL_ARTICULO_REPOSITORY_PORT) private readonly repo: HistorialArticuloRepositoryPort) {}

    async execute(id_historial: number, historial_articulo: Partial<HistorialArticulo>) {
        return await this.repo.update(id_historial, historial_articulo);
    }
}