import { Inject, Injectable, Search } from "@nestjs/common";
import { ArticuloSistemas } from "src/domain/articulo-sistemas/articulo-sistemas.entity";
import { GetArticuloSistemas } from "src/ports/in/articulo-sistemas/get-articulo-sistemas.port";
import type { ArticuloSistemasRepositoryPort } from "src/ports/out/articulo-sistemas-repository.port";
import { ARTICULO_SISTEMAS_REPOSITORY_PORT } from "src/ports/out/articulo-sistemas-repository.port";

@Injectable()
export class GetArticuloSistemasService implements GetArticuloSistemas {
    constructor(@Inject(ARTICULO_SISTEMAS_REPOSITORY_PORT) private readonly repo: ArticuloSistemasRepositoryPort) { }

    async execute(search: Partial<ArticuloSistemas>): Promise<ArticuloSistemas[]> {
        const articulo_sistemas = await this.repo.get(search);
        if (!articulo_sistemas) {
            throw Error('Error en la consulta');
        }
        return articulo_sistemas;
    }
}