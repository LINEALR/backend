import { PrismaService } from "src/infraestructure/prisma/postgresql/prisma.service";
import { Factura } from "src/domain/entities/factura/factura.entity";
import type { FacturaRepository } from "src/domain/entities/factura/factura.repository";
import { Injectable } from "@nestjs/common";
import { FacturaMapper } from "./mappers/factura.mapper";

@Injectable()
export class PrismaFacturaRepositoryi implements FacturaRepository {
    constructor(private readonly prisma: PrismaService) { }

    async get(search: Partial<Factura> = {}, page: number = 1, pageSize: number = 10):
        Promise<{
            factura: Factura[];
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

        const total = await this.prisma.t_factura.count({ where });
        const factura = await this.prisma.t_factura.findMany({
            where,
            skip,
            take,
        })

        return {
            factura: factura.map(FacturaMapper.toDomain),
            total,
            totalPages: Math.ceil(total / pageSize),
            currentPage: page
        }
    }

    async create(factura: Factura): Promise<Factura> {
        const created = await this.prisma.t_factura.create({ data: FacturaMapper.toPrisma(factura) });
        return FacturaMapper.toDomain(created);
    }

    async update(id_factura: number, factura: Partial<Factura>): Promise<Factura> {
        const updated = await this.prisma.t_factura.update({
            where: { id_factura: id_factura },
            data: FacturaMapper.partialToPrisma(factura),
        });
        return FacturaMapper.toDomain(updated);
    }

    async delete(id_factura: number): Promise<void> {
        await this.prisma.t_factura.delete({ where: { id_factura: id_factura } });
    }
}