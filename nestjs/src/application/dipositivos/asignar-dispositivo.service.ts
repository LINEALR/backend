import { Inject, Injectable } from "@nestjs/common";
import { Dispositivos } from "src/domain/dispositivo/dispositivos.entity";
import { type DispositivosRepositoryPort, DISPOSITIVOS_REPOSITORY_PORT } from "src/ports/out/dispositivos-repository.port";
import { type ColaboradoresRepositoryPort, COLABORADORES_REPOSITORY_PORT } from "src/ports/out/colaborador-repository.port";
import type { AsignarDispositivo } from "src/ports/in/dipositivos/asignar-dispositivo.port";

@Injectable()
export class AsignarDispositivoService implements AsignarDispositivo {
    constructor(
        @Inject(DISPOSITIVOS_REPOSITORY_PORT) private readonly dispositivosRepo: DispositivosRepositoryPort,
        @Inject(COLABORADORES_REPOSITORY_PORT) private readonly colaboradoresRepo: ColaboradoresRepositoryPort
    ) { }

    async execute(data: { id_dispositivos: number; num_control: number }): Promise<Dispositivos> {
        const dispositivo = await this.dispositivosRepo.get({ id_dispositivos: data.id_dispositivos })
        if (!dispositivo || dispositivo.dispositivos.length === 0) throw new Error("Dispositivo no encontrado")

        const disp = dispositivo.dispositivos[0];
        if (disp.status === ' Asignado') throw new Error("Dispositio ya asignado");

        const colaborador = await this.colaboradoresRepo.get({ num_control: data.num_control });
         if (!colaborador || colaborador.colaboradores.length === 0) throw new Error("Usuario no encontrado");

        const colab = colaborador.colaboradores[0];

        if(disp.id_dispositivos === undefined) throw new Error('No se selecciono dispositivo')

        const updatedDispositivo = await this.dispositivosRepo.upadte(disp.id_dispositivos,{
            id_area: colab.id_area,
            num_control: colab.id_colaboradores,
            status: 'ASIGNADO' 
        })

        return updatedDispositivo;
    }
}