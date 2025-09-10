import { PrismaService } from "src/infraestructure/prisma/postgresql/prisma.service";
import { Injectable } from "@nestjs/common";
import { AreasSistemas } from "src/domain/areas-sistemas/areas-sistemas.entity";
import type { AreasSistemasRepository } from "src/domain/areas-sistemas/areas-sistemas.repository";
import { AreasSistemasMapper } from "./mappers/areas-sistemas.mapper";

@Injectable()
export class PrismaAreasSistemasRepository implements AreasSistemasRepository {
    constructor(private readonly prisma: PrismaService) {}

    async get(search: Partial<AreasSistemas>): Promise<AreasSistemas[]>{
        const where = Object.fromEntries(
            Object.entries(search ?? {}).filter(([_, value]) => value !== undefined && value !== null)
        );

        const areas_sistemas = await this.prisma.t_areas_sistemas.findMany({ where });
        return areas_sistemas.map(col => AreasSistemasMapper.toDomain(col))
    }

    async create(areas_sistemas: AreasSistemas): Promise<AreasSistemas> {
        const created = await this.prisma.t_areas_sistemas.create( { data: AreasSistemasMapper.toPrisma(areas_sistemas) });
    return AreasSistemasMapper.toDomain(created)
    }

    async update(id_area: number, areas_sistemas: Partial<AreasSistemas>): Promise<AreasSistemas> {
        const updated = await this.prisma.t_areas_sistemas.update({
            where: { id_area: id_area },
            data: AreasSistemasMapper.partialToPrisma(areas_sistemas),
        });
        return AreasSistemasMapper.toDomain(updated)
    }

    async delete(id_area: number): Promise<void> {
        await this.prisma.t_areas_sistemas.delete({ where: { id_area: id_area }});
    }
}