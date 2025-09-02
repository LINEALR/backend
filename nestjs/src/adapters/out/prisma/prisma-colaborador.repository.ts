import { PrismaService } from "src/infraestructure/prisma/prisma.service";
import { Colaboradores } from "src/domain/colaboradores/colaboradores.entity";
import type { ColaboradoresRepository } from "src/domain/colaboradores/colaboradores.repository";
import { Injectable } from "@nestjs/common";
import { ColaboradoresMapper } from "./mappers/colaboradores.mapper";

@Injectable()
export class PrismaColaboradoresRepository implements ColaboradoresRepository {
    constructor(private readonly prisma: PrismaService) {}

    async get(search: Partial<Colaboradores>): Promise<Colaboradores[]> {
        const where = Object.fromEntries(
            Object.entries(search ?? {}).filter(([_, value]) => value !== undefined && value !== null)
        );

        const colaboradores = await this.prisma.t_colaboradores.findMany({ where });
        return colaboradores.map(col => ColaboradoresMapper.toDomain(col));
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