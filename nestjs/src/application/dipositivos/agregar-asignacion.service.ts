import { Inject, Injectable } from "@nestjs/common";
import { Dispositivos } from "src/domain/entities/dispositivo/dispositivos.entity";
import { type DispositivosRepositoryPort, DISPOSITIVOS_REPOSITORY_PORT } from "src/ports/out/dispositivos-repository.port";
import { type ColaboradoresRepositoryPort, COLABORADORES_REPOSITORY_PORT } from "src/ports/out/colaborador-repository.port";
import type { AgregarAsignacion } from "src/ports/in/dipositivos/agregar-asignacion.port";

@Injectable()
export class AgregarAsignacionService implements AgregarAsignacion {
    constructor(
        @Inject(DISPOSITIVOS_REPOSITORY_PORT) private readonly dispositivosRepo: DispositivosRepositoryPort,
        @Inject(COLABORADORES_REPOSITORY_PORT) private readonly colaboradoresRepo: ColaboradoresRepositoryPort,
    ) { }

    async execute(data: Dispositivos): Promise<Dispositivos> {
        if (!data.dispositivo) {
            throw new Error(`El nombre del dispositivo es obligatorio`);
        }

        const colaborador = await this.colaboradoresRepo.get({ num_control: data.num_control });
        if (!colaborador || colaborador.colaboradores.length === 0) throw new Error("Usuario no encontrado");

        const colab = colaborador.colaboradores[0];

        const dispositivo: Dispositivos = {
            ...data,
            num_cargador: data.num_cargador ?? "N/A",
            status: data.status ?? 'ASIGNADO',
            extras: data.extras ?? "N/A",
            id_area: colab.id_area,
            num_control: colab.id_colaboradores!,
            codigo_propietario: data.codigo_propietario ?? 1,
            codigo_ubicacion: data.codigo_ubicacion ?? 1,
            id_factura: data.id_factura ?? 1
        }

        return await this.dispositivosRepo.create(dispositivo);

    }
}