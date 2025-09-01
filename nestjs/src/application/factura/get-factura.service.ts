import { Inject, Injectable } from "@nestjs/common";
import { Factura } from "src/domain/factura/factura.entity";
import { GetFactura } from "src/ports/in/factura/get-factura.port";
import type { FacturaRepositoryPort } from "src/ports/out/factura-repository.port";
import { FACTURA_REPOSITORY_PORT } from "src/ports/out/factura-repository.port";

@Injectable()
export class GetFacturaService implements GetFactura {
    constructor(@Inject(FACTURA_REPOSITORY_PORT) private readonly repo: FacturaRepositoryPort) {}

    async execute(search: Partial<Factura>): Promise<Factura[]> {
        const factura = await this.repo.get(search);
        if (!factura) {
            throw new Error('Error')
        }
        return factura;
    }
}