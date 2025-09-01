import { Inject, Injectable } from "@nestjs/common";
import type { FacturaRepositoryPort } from "src/ports/out/factura-repository.port";
import { FACTURA_REPOSITORY_PORT } from "src/ports/out/factura-repository.port";
import { DeleteFactura } from "src/ports/in/factura/delete-factura.port";

@Injectable() 
export class DeleteFacturaService implements DeleteFactura {
    constructor(@Inject(FACTURA_REPOSITORY_PORT) private readonly repo: FacturaRepositoryPort) {}

    async execute(id_factura: number): Promise<void> {
        return await this.repo.delete(id_factura);
    }
}