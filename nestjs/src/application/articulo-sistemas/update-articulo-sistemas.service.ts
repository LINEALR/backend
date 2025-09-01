import { Inject, Injectable } from "@nestjs/common";
import { ArticuloSistemas } from "src/domain/articulo-sistemas/articulo-sistemas.entity";
import type { ArticuloSistemasRepositoryPort } from "src/ports/out/articulo-sistemas-repository.port";
import { ARTICULO_SISTEMAS_REPOSITORY_PORT } from "src/ports/out/articulo-sistemas-repository.port";
import { UpdateArticuloSistemas } from "src/ports/in/articulo-sistemas/update-articulo-sistemas.port";

@Injectable()
export class UpdateArticuloSistemasService implements UpdateArticuloSistemas {
    constructor(@Inject(ARTICULO_SISTEMAS_REPOSITORY_PORT) private readonly repo: ArticuloSistemasRepositoryPort) {}

    async execute(id_articulo: number, articulo_sistemas: Partial<ArticuloSistemas>): Promise<ArticuloSistemas> {
        return await this.repo.update(id_articulo, articulo_sistemas);
    }
}