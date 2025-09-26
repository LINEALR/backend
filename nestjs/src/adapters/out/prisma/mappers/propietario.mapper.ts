import { Propietario } from "src/domain/propietario/propietario.entity";

export class PropietarioMapper {
    static toPrisma(entity: Propietario) {
        return {
            id_propietario: entity.id_propietario,
            codigo_propietario: entity.codigo_propietario,
            nombre: entity.nombre
        }
    }

    static partialToPrisma(entity: Partial<Propietario>) {
        return {
            ...(entity.id_propietario !== undefined && { id_propietario: entity.id_propietario }),
            ...(entity.codigo_propietario !== undefined && { codigo_propietario: entity.codigo_propietario }),
            ...(entity.nombre !== undefined && { nombre: entity.nombre })
        }
    }

    static toDomain(raw: any): Propietario {
        return new Propietario ({
            id_propietario: raw.id_propietario,
            codigo_propietario: raw.codigo_propietario,
            nombre: raw.nombre
        })
    }
}