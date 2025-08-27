import { PrismaService } from "src/infraestructure/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { AreaSistemas } from "src/domain/area-sistemas/area-sistemas.entity";
import type{ AreaSistemasRepository } from "src/domain/area-sistemas/area-sistemas.repository";
import { AreaSistemasMapper } from "./mappers/area-sistemas.mapper";

@Injectable()
export class PrismaAreaSistemasRepository implements AreaSistemasRepository {
    constructor(private readonly prisma: PrismaService) {}

    async get(search: Partial<AreaSistemas>): Promise<AreaSistemas[]>{
        const where = Object.fromEntries(
            Object.entries(search ?? {}).filter(([_, value]) => value !== undefined && value !== null)
        );

        const area_sistemas = await this.prisma.t_areas_sistemas.findMany({ where });
        return area_sistemas.map(col => AreaSistemasMapper.toDomain(col))
    }

    async create(area_sistemas: AreaSistemas): Promise<AreaSistemas> {
        const created = await this.prisma.t_areas_sistemas.create( { data: AreaSistemasMapper.toPrisma(area_sistemas) });
    return AreaSistemasMapper.toDomain(created)
    }

    async update(id_area: number, area_sistemas: Partial<AreaSistemas>): Promise<AreaSistemas> {
        const updated = await this.prisma.t_areas_sistemas.update({
            where: { id_area: id_area },
            data: AreaSistemasMapper.partialToPrisma(area_sistemas),
        });
        return AreaSistemasMapper.toDomain(updated)
    }

    async delete(id_area: number): Promise<void> {
        await this.prisma.t_areas_sistemas.delete({ where: { id_area: id_area }});
    }
}