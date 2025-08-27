import { PrismaService } from "src/infraestructure/nestjs/prisma/prisma.service";
import { Usuario } from "src/nestjs/domain/usuario/usuario.entity";
import type { UsuarioRepository } from "src/nestjs/domain/usuario/usuario.repository";
import { Injectable } from "@nestjs/common";
import { UsuarioMapper } from "./mappers/usuario.mapper";

@Injectable()
export class PrismaUsuariosRepository implements UsuarioRepository {
    constructor(private readonly prisma: PrismaService) {}

    async get(search: Partial<Usuario>): Promise<Usuario[]> {
        const where = Object.fromEntries (
            Object.entries(search ?? {}).filter(([_, value]) => value !== undefined && value !== null)
        );
        const usuario = await this.prisma.t_usuario.findMany({ where });
        return usuario.map(col => UsuarioMapper.toDomain(col))
    }

    async create(usuario: Usuario): Promise <Usuario> {
        const created = await this.prisma.t_usuario.create({ data: UsuarioMapper.toPrisma(usuario) });
        return UsuarioMapper.toDomain(created)
    }  

    async update(id_usuario: number, usuario: Partial<Usuario>): Promise<Usuario> {
        const updated = await this.prisma.t_usuario.update({
            where: { id_usuario: id_usuario},
            data: UsuarioMapper.partalToPrisma(usuario),
        });
        return  UsuarioMapper.toDomain(updated)
    }

    async delete(id_usuario: number): Promise<void> {
        await this.prisma.t_usuario.delete({ where: { id_usuario: id_usuario }});
    }
}