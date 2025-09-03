import { Propietario } from "src/domain/propietario/propietario.entity";

export class PropietarioMapper {
    static toPrisma(entity: Propietario) {
        return {
            codigo_propietario: entity.codigo_propietario,
            nombre: entity.nombre
        }
    }

    static partialToPrisma(entity: Partial<Propietario>) {
        return {
            ...(entity.codigo_propietario !== undefined && { codigo_propietario: entity.codigo_propietario }),
            ...(entity.nombre !== undefined && { nombre: entity.nombre })
        }
    }

    static toDomain(raw: any): Propietario {
        return new Propietario ({
            codigo_propietario: raw.codigo_propietario,
            nombre: raw.nombre
        })
    }
}