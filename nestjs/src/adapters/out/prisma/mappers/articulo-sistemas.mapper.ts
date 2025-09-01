import { ArticuloSistemas } from "src/domain/articulo-sistemas/articulo-sistemas.entity";

export class ArticuloSistemasMapper {
    static toPrisma(entity: ArticuloSistemas) {
        return {
            codigo_articulo: entity.codigo_articulo,
            descripcion: entity.descripcion,
            identificador: entity.identificador,
            consecutivo: entity.consecutivo
        }
    }

    static partialToPrima(entity: Partial<ArticuloSistemas>) {
        return {
            ...(entity.codigo_articulo !== undefined && { codigo_articulo: entity.codigo_articulo }) ?? 0,
            ...(entity.descripcion !== undefined && { descripcion: entity.descripcion }),
            ...(entity.identificador !== undefined && { identificador: entity.identificador }),
            ...(entity.consecutivo !== undefined && { consecutivo: entity.consecutivo }) ?? 0
        }
    }

    static toDomian(raw: any): ArticuloSistemas {
        return new ArticuloSistemas({
            id_articulo: raw.id_articulo,
            codigo_articulo: raw.codigo_articulo,
            descripcion: raw.identificador,
            identificador: raw.identificador,
            consecutivo: raw.consecutivo 
        })
    }
}