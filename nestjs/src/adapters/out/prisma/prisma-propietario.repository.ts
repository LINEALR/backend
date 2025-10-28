import { PrismaService } from "src/infraestructure/prisma/postgresql/prisma.service";
import { Injectable } from "@nestjs/common";
import { Propietario } from "src/domain/entities/propietario/propietario.entity";
import { PropietarioRepository } from "src/domain/entities/propietario/propietario.repository";
import { PropietarioMapper } from "./mappers/propietario.mapper";


@Injectable()
export class PrismaPropietarioRepository implements PropietarioRepository {
    constructor(private readonly prisma: PrismaService) { }

    async get(search: Partial<Propietario> = {}, page: number = 1, pageSize: number = 10):
        Promise<{
            propietario: Propietario[];
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

        const total = await this.prisma.t_propietario.count({ where });
        const propietario = await this.prisma.t_propietario.findMany({
            where,
            skip,
            take,
        })

        return {
            propietario: propietario.map(PropietarioMapper.toDomain),
            total,
            totalPages: Math.ceil(total / pageSize),
            currentPage: page
        }
    }

    async create(propietario: Propietario): Promise<Propietario> {
        const created = await this.prisma.t_propietario.create({ data: PropietarioMapper.toPrisma(propietario) });
        return PropietarioMapper.toDomain(created);
    }

    async update(id_propietario: number, propietario: Partial<Propietario>): Promise<Propietario> {
        const updated = await this.prisma.t_propietario.update({
            where: { id_propietario: id_propietario },
            data: PropietarioMapper.partialToPrisma(propietario),
        });
        return PropietarioMapper.toDomain(updated)
    }

    async delete(id_propietario: number): Promise<void> {
        await this.prisma.t_propietario.delete({ where: { id_propietario: id_propietario } });
    }
}