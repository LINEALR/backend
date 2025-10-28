import { Inject, Injectable } from "@nestjs/common";
import { Factura } from "src/domain/entities/factura/factura.entity";
import type { FacturaRepositoryPort } from "src/ports/out/factura-repository.port";
import { FACTURA_REPOSITORY_PORT } from "src/ports/out/factura-repository.port";
import { UpdateFactura } from "src/ports/in/factura/update-factura.port";

@Injectable()
export class UpdateFacturaService implements UpdateFactura {
    constructor(@Inject(FACTURA_REPOSITORY_PORT) private readonly repo: FacturaRepositoryPort) {}

    async execute(id_factura: number, factura: Partial<Factura>): Promise<Factura> {
        return await this.repo.update(id_factura, factura);
    }
}