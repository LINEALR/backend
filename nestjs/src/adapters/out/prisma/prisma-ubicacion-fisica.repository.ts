import { PrismaService } from "src/infraestructure/prisma/postgresql/prisma.service";
import { Injectable } from "@nestjs/common";
import { UbicacionFisica } from "src/domain/entities/ubicacion-fisica/ubicacion-fisica.entity";
import type { UbicacionFisicaRepository } from "src/domain/entities/ubicacion-fisica/ubicacion-fisica.repository";
import { UbicacionFisicaMapper } from "./mappers/ubicacion-fisica.mapper";

@Injectable()
export class PrismaUbiacionFisicaRepository implements UbicacionFisicaRepository {
    constructor(private readonly prisma: PrismaService) { }

    async get(search: Partial<UbicacionFisica> = {}, page: number = 1, pageSize: number = 10):
        Promise<{
            ubicacionFisica: UbicacionFisica[];
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

        const total = await this.prisma.t_ubicacion_fisica.count({ where });
        const ubicacion_fisica = await this.prisma.t_ubicacion_fisica.findMany({
            where,
            skip,
            take,
        })

        return {
            ubicacionFisica: ubicacion_fisica.map(UbicacionFisicaMapper.toDomain),
            total,
            totalPages: Math.ceil(total / pageSize),
            currentPage: page
        }
    }

    async create(ubicacion_fisica: UbicacionFisica): Promise<UbicacionFisica> {
        const created = await this.prisma.t_ubicacion_fisica.create({ data: UbicacionFisicaMapper.toPrisma(ubicacion_fisica) });
        return UbicacionFisicaMapper.toDomain(created);
    }

    async update(id_ubicacion: number, ubicacion_fisica: Partial<UbicacionFisica>): Promise<UbicacionFisica> {
        const updated = await this.prisma.t_ubicacion_fisica.update({
            where: { id_ubicacion: id_ubicacion },
            data: UbicacionFisicaMapper.partialToPrisma(ubicacion_fisica),
        });
        return UbicacionFisicaMapper.toDomain(updated)
    }

    async delete(id_ubicacion: number): Promise<void> {
        await this.prisma.t_ubicacion_fisica.delete({ where: { id_ubicacion: id_ubicacion } });
    }
}