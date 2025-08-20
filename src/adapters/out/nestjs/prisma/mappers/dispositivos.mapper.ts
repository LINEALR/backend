import { Dispositivos } from "src/nestjs/domain/dispositivo/disposivos.entity";

export class DispositivosMapper {
    static toPrisma(entity: Dispositivos) {
        return {
            dispositivo: entity.dipsositivo,
            descripcion_sistemas: entity.descripcion_sistemas,
            marca: entity.marca,
            modelo: entity.modelo,
            num_serie: entity.num_serie,
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
        
    }

    static toDomain(raw: any): Dispositivos {
        return new Dispositivos({
            dispositivo: raw.dipositivo,
            descripcion_sistemas: raw.des,
            marca: raw.marca,
            modelo: raw.modelo,
            num_serie: raw.num_serie,
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