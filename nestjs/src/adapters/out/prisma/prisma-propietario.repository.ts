import { PrismaService } from "src/infraestructure/prisma/postgresql/prisma.service";
import { Injectable } from "@nestjs/common";
import { Propietario } from "src/domain/propietario/propietario.entity";
import { PropietarioRepository } from "src/domain/propietario/propietario.repository";
import { PropietarioMapper } from "./mappers/propietario.mapper";


@Injectable()
export class PrismaPropietarioRepository implements PropietarioRepository {
    constructor(private readonly prisma: PrismaService) { }

    async get(search: Partial<Propietario>): Promise<Propietario[]> {
        const where = Object.fromEntries(
            Object.entries(search ?? {}).filter(([_, value]) => value !== undefined && value !== null)
        );

        const propietario = await this.prisma.t_propietario.findMany({ where });
        return propietario.map(col => PropietarioMapper.toDomain(col));
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