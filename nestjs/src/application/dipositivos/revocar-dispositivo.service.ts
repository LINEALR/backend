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
         const dispositivo = await this.dispositivosRepo.get({
      id_dispositivos: data.id_dispositivos,
    });

    if (!dispositivo || dispositivo.dispositivos.length === 0)
      throw new Error("Dispositivo no encontrado");

    const disp = dispositivo.dispositivos[0];

    // Validar que tenga un estado
    if (!disp.status) throw new Error("El dispositivo no tiene estado definido");

    // Validar usuario
    const colaborador = await this.colaboradoresRepo.get({
      num_control: data.num_control,
    });
    if (!colaborador || colaborador.colaboradores.length === 0)
      throw new Error("Usuario no encontrado");

    const colab = colaborador.colaboradores[0];

    if (disp.id_dispositivos === undefined)
      throw new Error("No se seleccionó un dispositivo");

    // ----- 🔧 Nueva lógica de cambio de estado -----
    let nuevoEstado: string;
    let updateData: Partial<Dispositivos> = {};

    switch (disp.status.toUpperCase()) {
      case "ASIGNADO":
        nuevoEstado = "POR CONFIRMAR";
        updateData = {
          id_area: 1, // o el área que corresponda
          num_control: colab.num_control,
          status: nuevoEstado,
        };
        break;

      case "POR CONFIRMAR":
        nuevoEstado = "NO ASIGNADO";
        updateData = {
          id_area: 1, // limpiar datos del área
          num_control: 1, // limpiar asignación
          status: nuevoEstado,
        };
        break;

      default:
        throw new Error(
          `El estado actual (${disp.status}) no permite revocación`
        );
    }

    // Actualizar dispositivo
    const updatedDispositivo = await this.dispositivosRepo.update(
      disp.id_dispositivos,
      updateData
    );

     return updatedDispositivo
    }
}