import { AreasSistemas } from "src/domain/areas-sistemas/areas-sistemas.entity";

export class AreasSistemasMapper {
    static toPrisma(entity: AreasSistemas) {
        return {
            ceco_sap: entity.ceco_sap,
            descripcion_ceco: entity.descripcion_ceco,
            area_sistemas: entity.area_sistemas,
        };
    }

    static partialToPrisma(entity: Partial<AreasSistemas>) {
        return {
            ...(entity.ceco_sap !== undefined && { ceco_sap: entity.ceco_sap}),
            ...(entity.descripcion_ceco !== undefined && { descripcion_ceco: entity.descripcion_ceco }),
            ...(entity.area_sistemas !== undefined && { area_sistemas: entity.area_sistemas }) ?? 0
        }
    }

    static toDomain(raw: any): AreasSistemas {
        return new AreasSistemas({
            id_area: raw.id_area,
            ceco_sap: raw.ceco_sap,
            descripcion_ceco: raw.descripcion_ceco,
            area_sistemas: raw.area_sistemas,
        });
    }
}