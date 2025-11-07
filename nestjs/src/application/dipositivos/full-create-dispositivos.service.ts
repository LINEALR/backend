import { Inject, Injectable } from "@nestjs/common";
import { Dispositivos } from "src/domain/entities/dispositivo/dispositivos.entity";
import type { DispositivosRepositoryPort } from "src/ports/out/dispositivos-repository.port";
import { FullCreateDispositivos } from "src/ports/in/dipositivos/full-create-dispositvos.port";
import { DISPOSITIVOS_REPOSITORY_PORT } from "src/ports/out/dispositivos-repository.port";
import { FACTURA_REPOSITORY_PORT, type FacturaRepositoryPort } from "src/ports/out/factura-repository.port";
import { Factura } from "src/domain/entities/factura/factura.entity";

@Injectable()
export class FullCreateDispositivosService implements FullCreateDispositivos {
    constructor(
        @Inject(DISPOSITIVOS_REPOSITORY_PORT) private readonly dispositivoRepo: DispositivosRepositoryPort,
        @Inject(FACTURA_REPOSITORY_PORT) private readonly facturaRepo: FacturaRepositoryPort
    ) { }

    async execute(data: { dispositivos: Dispositivos, factura: Factura }): Promise<{ dispositivos: Dispositivos; factura: Factura }> {
        if (!data.dispositivos.dispositivo) {
            throw new Error(`El nombre del dispositivo es obligatorio`);
        }

        const factura = await this.facturaRepo.create ({
            ...data.factura
        })

        const dispositivo: Dispositivos = {
            ...data.dispositivos,
            status: data.dispositivos.status ?? 'NO ASIGNADO',
            extras: data.dispositivos.extras ?? "N/A",
            id_area: data.dispositivos.id_area ?? 1,
            num_control: data.dispositivos.codigo_propietario ?? 1,
            codigo_propietario: data.dispositivos.codigo_propietario ?? 1,
            codigo_ubicacion: data.dispositivos.codigo_ubicacion ?? 1,
            id_factura: factura.id_factura ?? 1
        }

        await this.dispositivoRepo.create(dispositivo)

        return { dispositivos: dispositivo, factura: factura };
    }
}