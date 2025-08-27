import { PrismaService } from "src/infraestructure/nestjs/prisma/prisma.service";
import type { DispositivosRepository } from "src/nestjs/domain/dispositivo/dispositivos.repository";
import { Dispositivos } from "src/nestjs/domain/dispositivo/disposivos.entity";
import { Injectable } from "@nestjs/common";
import { DispositivosMapper } from "./mappers/dispositivos.mapper";

@Injectable()
export class PrismaDispositivosRepository implements DispositivosRepository {
    constructor(private readonly prisma: PrismaService) {}

    async get(search: Partial<Dispositivos>): Promise<Dispositivos[]> {
        const where = Object.fromEntries(
            Object.entries(search ?? {}).filter(([_, value]) => value !== undefined && value !== null)
        );

        const dispositivo = await this.prisma.t_dispositivos.findMany();
        return dispositivo.map(col => DispositivosMapper.toDomain(col))
    }

    async create(dispositivo: Dispositivos): Promise<Dispositivos> {
        const created = await this.prisma.t_dispositivos.create({ data: DispositivosMapper.toPrisma(dispositivo) })
        return DispositivosMapper.toDomain(created)
    }

    async upadte(id_dispositivo: number, dispositivo: Partial<Dispositivos>): Promise<Dispositivos> {
       const updated = await this.prisma.t_dispositivos.update({
        where: { id_dispositivos: id_dispositivo},
        data: DispositivosMapper.partialToPrisma(dispositivo),
       })
       return DispositivosMapper.toDomain(updated)
    }

    async delete(id_dispositivo: number): Promise<void> {
        await this.prisma.t_dispositivos.delete({ where: { id_dispositivos: id_dispositivo } })
    }
}