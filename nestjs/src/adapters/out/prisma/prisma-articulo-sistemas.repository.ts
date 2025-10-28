import { PrismaService } from "src/infraestructure/prisma/postgresql/prisma.service";
import { ArticuloSistemas } from "src/domain/entities/articulo-sistemas/articulo-sistemas.entity";
import type { ArticuloSistemasRepository } from "src/domain/entities/articulo-sistemas/articulo-sistemas.repository";
import { Injectable } from "@nestjs/common";
import { ArticuloSistemasMapper } from "./mappers/articulo-sistemas.mapper";

@Injectable()
export class PrismaArticuloSistemasRepository implements ArticuloSistemasRepository {
    constructor(private readonly prisma: PrismaService) { }

    async get(search: Partial<ArticuloSistemas> = {}, page: number = 1, pageSize: number = 10):
        Promise<{
            articuloSistemas: ArticuloSistemas[];
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

        const total = await this.prisma.t_articulo_sistemas.count({ where });
        const articulo_sistemas = await this.prisma.t_articulo_sistemas.findMany({
            where,
            skip,
            take,
        })

        return {
            articuloSistemas: articulo_sistemas.map(ArticuloSistemasMapper.toDomain),
            total,
            totalPages: Math.ceil(total / pageSize),
            currentPage: page
        }

    }

    async create(articulo_sistemas: ArticuloSistemas): Promise<ArticuloSistemas> {
        const created = await this.prisma.t_articulo_sistemas.create({ data: ArticuloSistemasMapper.toPrisma(articulo_sistemas) });
        return ArticuloSistemasMapper.toDomain(created);
    }

    async update(id_articulo: number, articulo_sistemas: Partial<ArticuloSistemas>): Promise<ArticuloSistemas> {
        const updated = await this.prisma.t_articulo_sistemas.update({
            where: { id_articulo: id_articulo },
            data: ArticuloSistemasMapper.partialToPrima(articulo_sistemas)
        });
        return ArticuloSistemasMapper.toDomain(updated)
    }

    async delete(id_articulo: number): Promise<void> {
        await this.prisma.t_articulo_sistemas.delete({ where: { id_articulo: id_articulo } })
    }
}