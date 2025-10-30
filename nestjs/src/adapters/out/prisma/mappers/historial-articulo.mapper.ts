import { HistorialArticulo } from "src/domain/entities/historial-articulo/historial-articulo.entity";

export class HistorialArticuloMapper {
    static toPrisma(entity: HistorialArticulo) {
        return {
            id_colaboradores: entity.id_colaboradores,
            id_usuario: entity.id_usuario,
            id_dispositivos: entity. id_dispositivos,
            id_movimiento: entity.id_movimiento,
            fecha_modificacion: entity.fecha_modificacion,
        }
    }

    static partialToPrisma(entity: Partial<HistorialArticulo>) {
        return {
            ...(entity.id_colaboradores !== undefined && { id_colaboradores: entity.id_colaboradores }) ?? 0,
            ...(entity.id_usuario !== undefined && { id_usuario: entity.id_usuario }) ?? 0,
            ...(entity.id_dispositivos !== undefined && { id_dispositivos: entity.id_dispositivos }) ?? 0,
            ...(entity.id_movimiento !== undefined && { id_movimiento: entity.id_movimiento }) ?? 0,
            ...(entity.fecha_modificacion !== undefined && { fecha_modificacion: entity.fecha_modificacion }),
        }
    }

    static toDomain(raw: any): HistorialArticulo {
        return new HistorialArticulo({
            id_colaboradores: raw.id_colaboradores,
            id_usuario: raw.id_usuario,
            id_dispositivos: raw. id_dispositivos,
            id_movimiento: raw.id_movimiento,
            fecha_modificacion: raw.fecha_modificacion,
        });
    }
}