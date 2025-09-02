import { Inject, Injectable } from "@nestjs/common";
import { DeleteHistorialArticulo } from "src/ports/in/historial-articulo/delete-historial-articulo.port";
import { HISTORIAL_ARTICULO_REPOSITORY_PORT, type HistorialArticuloRepositoryPort } from "src/ports/out/historial-articulo.port";

@Injectable()
export class DeleteHistorialArticuloService implements DeleteHistorialArticulo {
    constructor(@Inject(HISTORIAL_ARTICULO_REPOSITORY_PORT) private readonly repo: HistorialArticuloRepositoryPort) {}

    async execute(id_historial: number): Promise<void> {
        return await this.repo.delete(id_historial)
    }
}