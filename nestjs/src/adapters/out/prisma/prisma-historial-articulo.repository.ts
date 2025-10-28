import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/infraestructure/prisma/postgresql/prisma.service";
import { HistorialArticulo } from "src/domain/entities/historial-articulo/historial-articulo.entity";
import type { HistorialArticuloRepository } from "src/domain/entities/historial-articulo/historial-articulos.repository";
import { HistorialArticuloMapper } from "./mappers/historial-articulo.mapper";

@Injectable()
export class PrismaHistorialArticulosRepository implements HistorialArticuloRepository {
    constructor(private readonly prisma: PrismaService) { }

    async get(search: Partial<HistorialArticulo> = {}, page: number = 1, pageSize: number = 10):
        Promise<{
            historialArticulo: HistorialArticulo[];
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

        const total = await this.prisma.t_historial_articulo.count({ where });
        const historial_articulo = await this.prisma.t_historial_articulo.findMany({
            where,
            skip,
            take,
        })

        return {
            historialArticulo: historial_articulo.map(HistorialArticuloMapper.toDomain),
            total,
            totalPages: Math.ceil(total / pageSize),
            currentPage: page
        }
    }


    async create(historial_articulo: HistorialArticulo): Promise<HistorialArticulo> {
        const created = await this.prisma.t_historial_articulo.create({ data: HistorialArticuloMapper.toPrisma(historial_articulo) });
        return HistorialArticuloMapper.toDomain(created);
    }

    async update(id_historial: number, historial_articulo: Partial<HistorialArticulo>): Promise<HistorialArticulo> {
        const updated = await this.prisma.t_historial_articulo.update({
            where: { id_historial: id_historial },
            data: HistorialArticuloMapper.partialToPrisma(historial_articulo),
        });
        return HistorialArticuloMapper.toDomain(updated)
    }

    async delete(id_historial: number): Promise<void> {
        await this.prisma.t_historial_articulo.delete({ where: { id_historial: id_historial } });
    }
}