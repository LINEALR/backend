import { Inject, Injectable } from "@nestjs/common";
import { Dispositivos } from "src/domain/entities/dispositivo/dispositivos.entity";
import type { DispositivosRepositoryPort } from "src/ports/out/dispositivos-repository.port";
import { CreateDispositivos } from "src/ports/in/dipositivos/create-dispositivos.port";
import { DISPOSITIVOS_REPOSITORY_PORT } from "src/ports/out/dispositivos-repository.port";

@Injectable()
export class CreateDispositivosService implements CreateDispositivos {
    constructor(@Inject(DISPOSITIVOS_REPOSITORY_PORT) private readonly repo: DispositivosRepositoryPort) {}

    async execute(data: Dispositivos): Promise<Dispositivos> {
        if (!data.dispositivo) {
            throw new Error(`El nombre del dispositivo es obligatorio`);
        }

        const dispositivo: Dispositivos = {
            ...data,
            status: data.status ?? 'NO ASIGNADO',
            extras: data.extras ?? "N/A",
            id_area: data.id_area ?? 1,
            num_control: data.codigo_propietario ?? 1,
            codigo_propietario: data.codigo_propietario ?? 1,
            codigo_ubicacion: data.codigo_ubicacion ?? 1,
            id_factura: data.id_factura ?? 1
        }

        return await this.repo.create(dispositivo);
    }
}