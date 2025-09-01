import { Inject, Injectable } from "@nestjs/common";
import type{ ArticuloSistemasRepositoryPort } from "src/ports/out/articulo-sistemas-repository.port";
import { ARTICULO_SISTEMAS_REPOSITORY_PORT } from "src/ports/out/articulo-sistemas-repository.port";
import { DeleteArticuloSistemas } from "src/ports/in/articulo-sistemas/delete-articulo-sistemas.port";

@Injectable()
export class DeleteArticuloSistemasService implements DeleteArticuloSistemas {
    constructor(@Inject(ARTICULO_SISTEMAS_REPOSITORY_PORT) private readonly repo: ArticuloSistemasRepositoryPort) {}

    async execute(id_articulo: number): Promise<void> {
        return await this.repo.delete(id_articulo);
    }
}