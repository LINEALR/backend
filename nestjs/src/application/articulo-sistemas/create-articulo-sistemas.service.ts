import { Inject, Injectable } from "@nestjs/common"
import { ArticuloSistemas } from "src/domain/articulo-sistemas/articuloSistemas.entity"
import { CreateArticuloSistemas } from "src/ports/in/articulo-sistemas/create-articulo-sistemas.port"
import type { ArticuloSistemasRepositoryPort } from "src/ports/out/ariticulo-sistemas-repository.port"
import { ARTICULO_SISTEMAS_REPOSITORY_PORT } from "src/ports/out/ariticulo-sistemas-repository.port"

@Injectable()
export class CreateArticuloSistemasService implements CreateArticuloSistemas {
    constructor(@Inject(ARTICULO_SISTEMAS_REPOSITORY_PORT) private readonly repo: ArticuloSistemasRepositoryPort) {}

    async execute(articulo_sistemas: Partial<ArticuloSistemas>): Promise<ArticuloSistemas> {
        if(!articulo_sistemas.codigo_articulo) {
            throw new Error('Error');
        }
        return await this.repo.create(articulo_sistemas);
    }   
}