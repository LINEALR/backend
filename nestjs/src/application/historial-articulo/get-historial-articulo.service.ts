import { Inject, Injectable } from "@nestjs/common";
import { HistorialArticulo } from "src/domain/historial-articulo/historial-articulo.entity";
import { GetHistorialArticulo } from "src/ports/in/historial-articulo/get-historial-articulo.port";
import { HISTORIAL_ARTICULO_REPOSITORY_PORT, type HistorialArticuloRepositoryPort } from "src/ports/out/historial-articulo.port";

@Injectable()
export class GetHistorialArticuloService implements GetHistorialArticulo {
    constructor(@Inject(HISTORIAL_ARTICULO_REPOSITORY_PORT) private readonly repo: HistorialArticuloRepositoryPort) { }

    async execute(search: Partial<HistorialArticulo>, page = 1, pageSize = 10):
        Promise<{
            historialArticulo: HistorialArticulo[];
            total: number;
            totalPages: number;
            currentPage: number;
        }> {
        const historial_articulo = await this.repo.get(search);
        if (historial_articulo) {
            throw new Error('Error')
        }
        return historial_articulo;
    }
}