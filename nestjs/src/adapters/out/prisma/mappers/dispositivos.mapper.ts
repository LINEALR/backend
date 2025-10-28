import { Dispositivos } from "src/domain/entities/dispositivo/dispositivos.entity";

export class DispositivosMapper {
    static toPrisma(entity: Dispositivos) {
        return {
            id_dispositivos: entity.id_dispositivos,
            dispositivo: entity.dispositivo,
            descripcion_sistemas: entity.descripcion_sistemas,
            marca: entity.marca,
            modelo: entity.modelo,
            num_serie: entity.num_serie,
            num_cargador: entity.num_cargador,
            id_visual: entity.id_visual,
            num_sap: entity.num_sap,
            status: entity.status,
            extras: entity.extras,
            id_area: entity.id_area,
            num_control: entity.num_control,
            codigo_propietario: entity.codigo_propietario,
            codigo_ubicacion: entity.codigo_ubicacion,
            id_factura: entity.id_factura,
        }
    }

    static partialToPrisma(entity: Partial<Dispositivos>) {
        return {
            ...(entity.id_dispositivos !== undefined && { id_dispositivo: entity.id_dispositivos }) ?? 1,
            ...(entity.dispositivo !== undefined && { dispositivo: entity.dispositivo }),
            ...(entity.descripcion_sistemas !== undefined && { descripcion_sistemas: entity.descripcion_sistemas }),
            ...(entity.marca !== undefined && { marca: entity.marca }),
            ...(entity.modelo !== undefined && { modelo: entity.modelo }),
            ...(entity.num_serie !== undefined && { num_serie: entity.num_serie }),
            ...(entity.num_cargador !== undefined && { num_cargador: entity.num_cargador }),
            ...(entity.id_visual !== undefined && { id_visual: entity.id_visual }),
            ...(entity.num_sap !== undefined && { num_sap: entity.num_sap }) ?? 1,
            ...(entity.status !== undefined && { status: entity.status }),
            ...(entity.extras !== undefined && { extras: entity.extras }) ?? 1,
            ...(entity.id_area !== undefined && { id_area: entity.id_area }) ?? 1,
            ...(entity.num_control !== undefined && { num_control: entity.num_control }),
            ...(entity.codigo_propietario !== undefined && { codigo_propietario: entity.codigo_propietario }) ?? 1,
            ...(entity.codigo_ubicacion !== undefined && { codigo_ubicacion: entity.codigo_ubicacion }) ?? 1,
            ...(entity.id_factura !== undefined && { id_factura: entity.id_factura }) ?? 1,
        }
    }

    static toDomain(raw: any): Dispositivos {
        return new Dispositivos({
            id_dispositivos: raw.id_dispositivos,
            dispositivo: raw.dispositivo,
            descripcion_sistemas: raw.descripcion_sistemas,
            marca: raw.marca,
            modelo: raw.modelo,
            num_serie: raw.num_serie,
            num_cargador: raw.num_cargador,
            id_visual: raw.id_visual,
            num_sap: raw.num_sap,
            status: raw.status,
            extras: raw.extras,
            id_area: raw.id_area,
            num_control: raw.num_control,
            codigo_propietario: raw.codigo_propietario,
            codigo_ubicacion: raw.codigo_ubicacion,
            id_factura: raw.id_factura,
        });
    }
}