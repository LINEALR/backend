import { PrismaService } from "src/infraestructure/nestjs/prisma/prisma.service";
import type { ColaboradoresRepository } from "src/nestjs/domain/colaboradores/colaboradores.repository";
import { Colaboradores } from "src/nestjs/domain/colaboradores/colaboradores.entity";
import { Injectable } from "@nestjs/common";
import { ColaboradoresMapper } from "./mappers/colaboradores.mappers";

@Injectable()
export class PrismaColaboradoresRepository implements ColaboradoresRepository {
    constructor(private readonly prisma: PrismaService) { }

    async getAll(): Promise<Colaboradores[]> {
        const colaborador = await this.prisma.t_colaboradores.findMany();
        return colaborador.map(col => new Colaboradores(col))
    }

    async get(search: Partial<Colaboradores>): Promise<Colaboradores[] | null> {
        const where = Object.fromEntries(
            Object.entries(search ?? {}).filter(([_, value]) => value !== undefined && value !== null)
        );

        const colaboradores = await this.prisma.t_colaboradores.findMany({ where });
        return colaboradores.map(col => ColaboradoresMapper.toDomain(col));
    }

    async create(colaboradores: Colaboradores): Promise<Colaboradores> {
        const created = await this.prisma.t_colaboradores.create({ data: ColaboradoresMapper.toPrisma(colaboradores) });
        return ColaboradoresMapper.toDomain(created);
    }

    async update(id_colaborador: number, colaborador: Partial<Colaboradores>): Promise<Colaboradores> {
        const updated = await this.prisma.t_colaboradores.update({
            where: { id_colaboradores: id_colaborador },
            data: {
                num_control: colaborador.num_control,
                nombre: colaborador.nombre,
                correo: colaborador.correo,
                id_area: colaborador.id_area,
            },
        });
        return new Colaboradores({
            num_control: updated.num_control,
            nombre: updated.nombre,
            correo: updated.correo,
            id_area: updated.id_area
        })
    }

    async delete(id_colaborador: number): Promise<void> {
        await this.prisma.t_colaboradores.delete({ where: { id_colaboradores: id_colaborador } });
    }
}