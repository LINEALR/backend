import { RawBody } from "@nestjs/common";
import { UbicacionFisica } from "src/domain/ubicacion-fisica/ubicacion-fisica.entity";

export class UbicacionFisicaMapper {
    static toPrisma(entity: UbicacionFisica) {
        return {
        codigo_ubicacion: entity.codigo_ubicacion,
        descripcion: entity.descripcion
        }
    }

    static partialToPrisma(entity: Partial<UbicacionFisica>) {
        return {
            ...(entity.codigo_ubicacion !== undefined && { codigo_ubicacion: entity.codigo_ubicacion }),
            ...(entity.descripcion !== undefined && { nombre: entity.descripcion })
        }
    }

    static toDomain(raw: any): UbicacionFisica {
        return new UbicacionFisica({
        codigo_ubicacion: raw.codigo_ubicacion,
        descripcion: raw.descripcion
        })
    }
}