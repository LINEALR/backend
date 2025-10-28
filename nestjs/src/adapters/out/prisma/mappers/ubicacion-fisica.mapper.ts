import { RawBody } from "@nestjs/common";
import { UbicacionFisica } from "src/domain/entities/ubicacion-fisica/ubicacion-fisica.entity";

export class UbicacionFisicaMapper {
    static toPrisma(entity: UbicacionFisica) {
        return {
        id_ubicacion: entity.id_ubicacion,
        codigo_ubicacion: entity.codigo_ubicacion,
        descripcion: entity.descripcion
        }
    }

    static partialToPrisma(entity: Partial<UbicacionFisica>) {
        return {
            ...(entity.id_ubicacion !== undefined && { id_ubicacion: entity.id_ubicacion }) ?? 0,
            ...(entity.codigo_ubicacion !== undefined && { codigo_ubicacion: entity.codigo_ubicacion }),
            ...(entity.descripcion !== undefined && { nombre: entity.descripcion })
        }
    }

    static toDomain(raw: any): UbicacionFisica {
        return new UbicacionFisica({
        id_ubicacion: raw.id_ubicacion,
        codigo_ubicacion: raw.codigo_ubicacion,
        descripcion: raw.descripcion
        })
    }
}