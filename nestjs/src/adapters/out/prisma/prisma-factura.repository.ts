import { PrismaService } from "src/infraestructure/prisma/prisma.service";
import { Factura } from "src/domain/factura/factura.entity";
import type { FacturaRepository } from "src/domain/factura/factura.repository";
import { Injectable } from "@nestjs/common";
import { FacturaMapper } from "./mappers/factura.mapper";

@Injectable()
export class PrismaFacturaRepositoryi implements FacturaRepository {
    constructor(private readonly prisma: PrismaService) {}

    async get(search: Partial<Factura>): Promise<Factura[]> {
        const where = Object.fromEntries(
            Object.entries(search ?? {}).filter(([_, value]) => value !== undefined && value !== null)
        );

        const factura = await this.prisma.t_factura.findMany({ where });
        return factura.map(col => FacturaMapper.toDomain(col));
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
        await this.prisma.t_factura.delete({ where: { id_factura: id_factura}});
    }
}