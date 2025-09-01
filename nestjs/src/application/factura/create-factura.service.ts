import { Inject, Injectable } from "@nestjs/common";
import { Factura } from "src/domain/factura/factura.entity";
import { CreateFactura } from "src/ports/in/factura/create-factura.port";
import type { FacturaRepositoryPort } from "src/ports/out/factura-repository.port";
import { FACTURA_REPOSITORY_PORT } from "src/ports/out/factura-repository.port";

@Injectable()
export class CreateFacturaService implements CreateFactura {
    constructor(@Inject(FACTURA_REPOSITORY_PORT) private readonly repo: FacturaRepositoryPort) {}

    async execute(factura: Partial<Factura>): Promise<Factura> {
        if(!factura.folio_factura) {
            throw new Error('Error');
        }
        return await this.repo.create(factura);
    }
}