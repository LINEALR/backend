import { AreaSistemas } from "src/domain/area-sistemas/area-sistemas.entity";

export class AreaSistemasMapper {
    static toPrisma(entity: AreaSistemas) {
        return {
            ceco_sap: entity.ceco_sap,
            descripcion_ceco: entity.descripcion_ceco,
            area_sistemas: entity.area_sistemas,
        };
    }

    static partialToPrisma(entity: Partial<AreaSistemas>) {
        return {
            ...(entity.ceco_sap !== undefined && { ceco_sap: entity.ceco_sap}),
            ...(entity.descripcion_ceco !== undefined && { descripcion_ceco: entity.descripcion_ceco }),
            ...(entity.area_sistemas !== undefined && { area_sistemas: entity.area_sistemas }) ?? 0
        }
    }

    static toDomain(raw: any): AreaSistemas {
        return new AreaSistemas({
            ceco_sap: raw.ceco_sap,
            descripcion_ceco: raw.descripcion_ceco,
            area_sistemas: raw.area_sistemas,
        });
    }
}