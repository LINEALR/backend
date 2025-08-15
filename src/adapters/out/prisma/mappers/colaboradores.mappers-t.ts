import { Colaboradores } from "src/domain/colaboradores/colaboradores.entity";

export class ColaboradoresMapper {
    static toPrisma(entity: Colaboradores) {
        return {
            num_control: entity.num_control,
            nombre: entity.nombre,
            correo: entity.correo,
            id_area: entity.id_area,
        };
    }

    static partialToPrima(entity: Partial<Colaboradores>) {
        return {
            ...(entity.num_control !== undefined && { num_control: entity.num_control }) ?? 0,
            ...(entity.nombre !== undefined && { nombre: entity.nombre }),
            ...(entity.correo !== undefined && { correo: entity.correo }),
            ...(entity.id_area !== undefined && { id_area: entity.id_area}),
        };
    }

    static toDomain(raw: any): Colaboradores {
        return new Colaboradores({
            num_control: raw.num_control,
            nombre: raw.nombre,
            correo: raw.correo,
            id_area: raw.id_area,
        });
    }
}