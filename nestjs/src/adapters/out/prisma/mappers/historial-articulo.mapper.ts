import { HistorialArticulo } from "src/domain/historial-articulo/historial-articulo.entity";

export class HistorialArticuloMapper {
    static toPrisma(entity: HistorialArticulo) {
        return {
            id_usuario: entity.id_usuario,
            fecha_modificacion: entity.fecha_modificacion,
            id_dispositivos: entity. id_dispositivos,
            hostname: entity.hostname,
            ceco_sap_ant: entity.ceco_sap_ant,
            num_control_ant: entity.num_control_ant,
            id_movimiento: entity.id_movimiento,
        }
    }

    static partialToPrisma(entity: Partial<HistorialArticulo>) {
        return {
            ...(entity.id_usuario !== undefined && { id_usuario: entity.id_usuario }) ?? 0,
            ...(entity.fecha_modificacion !== undefined && { fecha_modificacion: entity.fecha_modificacion }),
            ...(entity.id_dispositivos !== undefined && { id_dispositivos: entity.id_dispositivos }) ?? 0,
            ...(entity.hostname !== undefined && { hostname: entity.hostname}),
            ...(entity.ceco_sap_ant !== undefined && { ceco_sap_ant: entity.ceco_sap_ant }),
            ...(entity.num_control_ant !== undefined && { num_control_ant: entity.num_control_ant }) ?? 0,
            ...(entity.id_movimiento !== undefined && { id_movimiento: entity.id_movimiento }) ?? 0
        }
    }

    static toDomain(raw: any): HistorialArticulo {
        return new HistorialArticulo({
            id_usuario: raw.id_usuario,
            fecha_modificacion: raw.fecha_modificacion,
            id_dispositivos: raw. id_dispositivos,
            hostname: raw.hostname,
            ceco_sap_ant: raw.ceco_sap_ant,
            num_control_ant: raw.num_control_ant,
            id_movimiento: raw.id_movimiento,
        });
    }
}