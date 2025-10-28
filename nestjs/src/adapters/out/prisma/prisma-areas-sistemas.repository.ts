import { PrismaService } from "src/infraestructure/prisma/postgresql/prisma.service";
import { Injectable } from "@nestjs/common";
import { AreasSistemas } from "src/domain/entities/areas-sistemas/areas-sistemas.entity";
import type { AreasSistemasRepository } from "src/domain/entities/areas-sistemas/areas-sistemas.repository";
import { AreasSistemasMapper } from "./mappers/areas-sistemas.mapper";

@Injectable()
export class PrismaAreasSistemasRepository implements AreasSistemasRepository {
    constructor(private readonly prisma: PrismaService) { }

    async get(search: Partial<AreasSistemas> = {}, page: number = 1, pageSize: number = 10):
        Promise<{
            areasSistemas: AreasSistemas[];
            total: number;
            totalPages: number;
            currentPage: number;
        }> {
        const { page: _page, pageSize: _pageSize, ...filters } = search as any;
        const where = Object.fromEntries(
            Object.entries(filters).filter(([_, value]) => value !== undefined && value !== null)
        );

        const skip = (page - 1) * pageSize;
        const take = pageSize;

        const total = await this.prisma.t_areas_sistemas.count({ where });
        const areas_sistemas = await this.prisma.t_areas_sistemas.findMany({
            where,
            skip,
            take,
        })

        return {
            areasSistemas: areas_sistemas.map(AreasSistemasMapper.toDomain), 
            total,
            totalPages: Math.ceil(total / pageSize),
            currentPage: page
        }
    }

    async create(areas_sistemas: AreasSistemas): Promise<AreasSistemas> {
        const created = await this.prisma.t_areas_sistemas.create({ data: AreasSistemasMapper.toPrisma(areas_sistemas) });
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
        await this.prisma.t_areas_sistemas.delete({ where: { id_area: id_area } });
    }
}