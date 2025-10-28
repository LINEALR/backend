import { Colaboradores } from "src/domain/entities/colaboradores/colaboradores.entity";

export class ColaboradoresMapper {
    static toPrisma(entity: Colaboradores) {
        return {
            id_colaboradores: entity.id_colaboradores,
            num_control: entity.num_control,
            nombre: entity.nombre,
            correo: entity.correo,
            id_area: entity.id_area
        }
    }

    static partialToPrisma(entity: Partial<Colaboradores>) {
        return {
            ...(entity.id_colaboradores !== undefined && { num_control: entity.id_colaboradores }) ?? 0,
            ...(entity.num_control !== undefined && { num_control: entity.num_control }) ?? 0,
            ...(entity.nombre !== undefined && { nombre: entity.nombre }),
            ...(entity.correo !== undefined && { correo: entity.correo }),
            ...(entity.id_area !== undefined && { id_area: entity.id_area}) ?? 0,
        };
    }

    static toDomain(raw: any): Colaboradores {
        return new Colaboradores({
            id_colaboradores: raw.id_colaboradores,
            num_control: raw.num_control,
            nombre: raw.nombre,
            correo: raw.correo,
            id_area: raw.id_area,
        });
    }
}