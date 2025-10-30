import { Inject, Injectable } from "@nestjs/common";
import { HistorialArticulo } from "src/domain/entities/historial-articulo/historial-articulo.entity";
import { CreateHistorialArticulo } from "src/ports/in/historial-articulo/create-historial-articulo.port";
import { type HistorialArticuloRepositoryPort, HISTORIAL_ARTICULO_REPOSITORY_PORT } from "src/ports/out/historial-articulo.port";
import { type DispositivosRepositoryPort, DISPOSITIVOS_REPOSITORY_PORT } from "src/ports/out/dispositivos-repository.port";
import { type ColaboradoresRepositoryPort, COLABORADORES_REPOSITORY_PORT } from "src/ports/out/colaborador-repository.port";
import { type UsuarioRepositoryPort, USUARIO_REPOSITORY_PORT } from "src/ports/out/usuario-repository.port";
import { Movimiento } from "src/domain/entities/movimientos/movimientos.entity";
import { INJECTABLE_WATERMARK } from "@nestjs/common/constants";


@Injectable()
export class CreateHistorialArticuloService implements CreateHistorialArticulo {
    constructor(
        @Inject(HISTORIAL_ARTICULO_REPOSITORY_PORT) private readonly historialRepo: HistorialArticuloRepositoryPort,
        @Inject(COLABORADORES_REPOSITORY_PORT) private readonly colaboradoresRepo: ColaboradoresRepositoryPort
    ) { }

    async execute(data: { num_control: number; id_usuario: number, id_dispositivos: number; movimiento: string; fecha_modificacion: Date }): Promise<HistorialArticulo> {
        if (!data.id_dispositivos) {
            throw new Error('Error')
        }

        const colaborador = await this.colaboradoresRepo.get({ num_control: data.num_control });
        if (!colaborador || colaborador.colaboradores.length === 0) throw new Error("Usuario no encontrado");

        const colab = colaborador.colaboradores[0];

        let id_movimiento: number;

        if (data.movimiento === "ALTA") {
            id_movimiento = 1;
        } else if (data.movimiento === "BAJA") {
            id_movimiento = 2;
        } else if (data.movimiento === "ASIGNACION") {
            id_movimiento = 3;
        } else if (data.movimiento === "REASIGNACION") {
            id_movimiento = 4;
        } else if (data.movimiento === "REVOCACION") {
            id_movimiento = 5;
        } else {
            throw new Error(`Movimiento no reconocido: ${data.movimiento}`);
        }

        const historial = new HistorialArticulo({
            id_colaboradores: colab.id_colaboradores!,
            id_usuario: data.id_usuario,
            id_dispositivos: data.id_dispositivos,
            id_movimiento: id_movimiento,
            fecha_modificacion: data.fecha_modificacion
        })

        return await this.historialRepo.create(historial)
    }
}