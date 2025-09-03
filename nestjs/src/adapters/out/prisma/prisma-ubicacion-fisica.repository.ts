import { PrismaService } from "src/infraestructure/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { UbicacionFisica } from "src/domain/ubicacion-fisica/ubicacion-fisica.entity";
import type { UbicacionFisicaRepository } from "src/domain/ubicacion-fisica/ubicacion-fisica.repository";
import { UbicacionFisicaMapper } from "./mappers/ubicacion-fisica.mapper";

@Injectable()
export class PrismaUbiacionFisicaRepository implements UbicacionFisicaRepository {
    constructor(private readonly prisma: PrismaService) { }

    async get(search: Partial<UbicacionFisica>): Promise<UbicacionFisica[]> {
        const where = Object.fromEntries(
            Object.entries(search ?? {}).filter(([_, value]) => value !== undefined && value !== null)
        );

        const ubicacion_fisica = await this.prisma.t_ubicacion_fisica.findMany({ where });
        return ubicacion_fisica.map(col => UbicacionFisicaMapper.toDomain(col));
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