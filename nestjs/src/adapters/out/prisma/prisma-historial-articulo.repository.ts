import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/infraestructure/prisma/prisma.service";
import { HistorialArticulo } from "src/domain/historial-articulo/historial-articulo.entity";
import type { HistorialArticuloRepository } from "src/domain/historial-articulo/historial-articulos.repository";
import { HistorialArticuloMapper } from "./mappers/historial-articulo.mapper";

@Injectable()
export class PrismaHistorialArticulosRepository implements HistorialArticuloRepository {
    constructor(private readonly prisma: PrismaService) { }

    async get(search: Partial<HistorialArticulo>): Promise<HistorialArticulo[]> {
        const where = Object.fromEntries(
            Object.entries(search ?? {}).filter(([_, value]) => value !== undefined && value !== null)
        );

        const historial_articulo = await this.prisma.t_historial_articulo.findMany({ where });
        return historial_articulo.map(col => HistorialArticuloMapper.toDomain(col));
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