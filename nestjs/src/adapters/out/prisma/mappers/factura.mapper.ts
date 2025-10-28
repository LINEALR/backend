import { Factura } from "src/domain/entities/factura/factura.entity";

export class FacturaMapper {
    static toPrisma(entity: Factura) {
        return {
            id_factura: entity.id_factura,
            codigo_propietario: entity.codigo_propietario,
            proveedor_alias: entity.proveedor_alias,
            razon_social: entity.razon_social,
            folio_factura: entity.folio_factura,
            fact_so: entity.fact_so,
            fecha_factura: entity.fecha_factura,
            moneda: entity.moneda,
            unit_s_iva: entity.unit_s_iva
        }
    }

    static partialToPrisma(entity: Partial<Factura>) {
        return {
            ...(entity.id_factura !== undefined && { id_factura: entity.id_factura }) ?? 0,
            ...(entity.codigo_propietario !== undefined && { codigo_propietario: entity.codigo_propietario }) ?? 0,
            ...(entity.proveedor_alias !== undefined && { proveedor_alias: entity.proveedor_alias }),
            ...(entity.razon_social !== undefined && { razon_social: entity.razon_social }),
            ...(entity.folio_factura !== undefined && { folio_factura: entity.folio_factura }),
            ...(entity.fact_so !== undefined && { fact_so: entity.fact_so }),
            ...(entity.fecha_factura !== undefined && { fecha_factura: entity.fecha_factura, }),
            ...(entity.moneda !== undefined && { moneda: entity.moneda }),
            ...(entity.unit_s_iva !== undefined && { unit_s_iva: entity.unit_s_iva }) ?? 0
        }
    }

    static toDomain(raw: any): Factura {
        return {
            id_factura: raw.id_factura,
            codigo_propietario: raw.codigo_propietario,
            proveedor_alias: raw.proveedor_alias,
            razon_social: raw.razon_social,
            folio_factura: raw.folio_factura,
            fact_so: raw.fact_so,
            fecha_factura: raw.fecha_factura,
            moneda: raw.moneda,
            unit_s_iva: raw.unit_s_iva,
        }
    }
}