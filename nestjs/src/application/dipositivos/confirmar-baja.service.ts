import { Inject, Injectable } from "@nestjs/common";
import { Dispositivos } from "src/domain/entities/dispositivo/dispositivos.entity";
import { type DispositivosRepositoryPort, DISPOSITIVOS_REPOSITORY_PORT } from "src/ports/out/dispositivos-repository.port";
import { type ColaboradoresRepositoryPort, COLABORADORES_REPOSITORY_PORT } from "src/ports/out/colaborador-repository.port";
import type { RevocarDispositivo } from "src/ports/in/dipositivos/revocar-dispositivo.port";

@Injectable()
export class RevocarDispositivoService implements RevocarDispositivo {
    constructor(
        @Inject(DISPOSITIVOS_REPOSITORY_PORT) private readonly dispositivosRepo: DispositivosRepositoryPort,
        @Inject(COLABORADORES_REPOSITORY_PORT) private readonly colaboradoresRepo: ColaboradoresRepositoryPort
    ) { }

    async execute(data: { id_dispositivos: number; num_control: number }): Promise<Dispositivos> {
        const dispositivo = await this.dispositivosRepo.get({ id_dispositivos: data.id_dispositivos })
        if (!dispositivo || dispositivo.dispositivos.length === 0) throw new Error("Dispositivo no encontrado")

        const disp = dispositivo.dispositivos[0];

        if(disp.id_dispositivos === undefined) throw new Error('No se selecciono dispositivo')

            
        if (disp.status != 'POR CONFIRMAR') throw new Error('Dispositivo en estaus incorrecto');

        const updatedDispositivo = await this.dispositivosRepo.update(disp.id_dispositivos,{
            id_area: 1,
            num_control: 1,
            status: 'DISPONIBLE' 
        })

        return updatedDispositivo;
    }
}