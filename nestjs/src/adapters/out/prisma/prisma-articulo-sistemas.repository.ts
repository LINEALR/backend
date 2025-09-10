import { PrismaService } from "src/infraestructure/prisma/postgresql/prisma.service";
import { ArticuloSistemas } from "src/domain/articulo-sistemas/articulo-sistemas.entity";
import type { ArticuloSistemasRepository } from "src/domain/articulo-sistemas/articulo-sistemas.repository";
import { Injectable } from "@nestjs/common";
import { ArticuloSistemasMapper } from "./mappers/articulo-sistemas.mapper";

@Injectable()
export class PrismaArticuloSistemasRepository implements ArticuloSistemasRepository {
    constructor(private readonly prisma: PrismaService) {}

    async get(search: Partial<ArticuloSistemas>): Promise<ArticuloSistemas[]> {
        const where = Object.fromEntries(
            Object.entries(search ?? {}).filter(([_, value]) => value !== undefined && value !== null)
        );

        const articulo_sistemas = await this.prisma.t_articulo_sistemas.findMany({ where });
        return articulo_sistemas.map(col => ArticuloSistemasMapper.toDomian(col))
    }

    async create(articulo_sistemas: ArticuloSistemas): Promise<ArticuloSistemas> {
        const created = await this.prisma.t_articulo_sistemas.create({ data: ArticuloSistemasMapper.toPrisma(articulo_sistemas)});
        return ArticuloSistemasMapper.toDomian(created);
    }

    async update(id_articulo: number, articulo_sistemas: Partial<ArticuloSistemas>): Promise<ArticuloSistemas> {
        const updated = await this.prisma.t_articulo_sistemas.update({
            where: { id_articulo: id_articulo},
            data: ArticuloSistemasMapper.partialToPrima(articulo_sistemas)
        });
        return ArticuloSistemasMapper.toDomian(updated)
    }

    async delete(id_articulo: number): Promise<void> {
        await this.prisma.t_articulo_sistemas.delete({ where: { id_articulo: id_articulo }})
    }
}