import { PrismaService } from "src/infraestructure/prisma/postgresql/prisma.service";
import { Usuario } from "src/domain/entities/usuario/usuario.entity";
import type { UsuarioRepository } from "src/domain/entities/usuario/usuario.repository";
import { Injectable } from "@nestjs/common";
import { UsuarioMapper } from "./mappers/usuario.mapper";

@Injectable()
export class PrismaUsuariosRepository implements UsuarioRepository {
    constructor(private readonly prisma: PrismaService) { }

    async get(search: Partial<Usuario> = {}, page: number = 1, pageSize: number = 10):
        Promise<{
            usuario: Usuario[];
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

        const total = await this.prisma.t_usuario.count({ where });
        const usuario = await this.prisma.t_usuario.findMany({
            where,
            skip,
            take,
        })

        return {
            usuario: usuario.map(UsuarioMapper.toDomain),
            total,
            totalPages: Math.ceil(total / pageSize),
            currentPage: page
        }
    }

    async create(usuario: Usuario): Promise<Usuario> {
        const created = await this.prisma.t_usuario.create({ data: UsuarioMapper.toPrisma(usuario) });
        return UsuarioMapper.toDomain(created)
    }

    async update(id_usuario: number, usuario: Partial<Usuario>): Promise<Usuario> {
        const updated = await this.prisma.t_usuario.update({
            where: { id_usuario: id_usuario },
            data: UsuarioMapper.partalToPrisma(usuario),
        });
        return UsuarioMapper.toDomain(updated)
    }

    async delete(id_usuario: number): Promise<void> {
        await this.prisma.t_usuario.delete({ where: { id_usuario: id_usuario } });
    }
}