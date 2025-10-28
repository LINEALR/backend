import { PrismaService } from "src/infraestructure/prisma/postgresql/prisma.service";
import { Colaboradores } from "src/domain/entities/colaboradores/colaboradores.entity";
import type { ColaboradoresRepository } from "src/domain/entities/colaboradores/colaboradores.repository";
import { Injectable } from "@nestjs/common";
import { ColaboradoresMapper } from "./mappers/colaboradores.mapper";

@Injectable()
export class PrismaColaboradoresRepository implements ColaboradoresRepository {
    constructor(private readonly prisma: PrismaService) { }

    async get(search: Partial<Colaboradores> = {}, page: number = 1, pageSize: number = 10):
        Promise<{
            colaboradores: Colaboradores[];
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

        const total = await this.prisma.t_colaboradores.count({ where });
        const colaboradores = await this.prisma.t_colaboradores.findMany({
            where,
            skip,
            take,
        })
        return {
            colaboradores: colaboradores.map(ColaboradoresMapper.toDomain),
            total,
            totalPages: Math.ceil(total / pageSize),
            currentPage: page
        }
    }

    async create(colaboradores: Colaboradores): Promise<Colaboradores> {
        const created = await this.prisma.t_colaboradores.create({ data: ColaboradoresMapper.toPrisma(colaboradores) });
        return ColaboradoresMapper.toDomain(created);
    }

    async update(id_colaborador: number, colaborador: Partial<Colaboradores>): Promise<Colaboradores> {
        const updated = await this.prisma.t_colaboradores.update({
            where: { id_colaboradores: id_colaborador },
            data: ColaboradoresMapper.partialToPrisma(colaborador),
        });
        return ColaboradoresMapper.toDomain(updated)
    }

    async delete(id_colaborador: number): Promise<void> {
        await this.prisma.t_colaboradores.delete({ where: { id_colaboradores: id_colaborador } });
    }
}