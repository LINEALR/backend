import { PrismaService } from "src/infraestructure/prisma/postgresql/prisma.service";
import type { DispositivosRepository } from "src/domain/dispositivo/dispositivos.repository";
import { Dispositivos } from "src/domain/dispositivo/dispositivos.entity";
import { Injectable } from "@nestjs/common";
import { DispositivosMapper } from "./mappers/dispositivos.mapper";

@Injectable()
export class PrismaDispositivosRepository implements DispositivosRepository {
    constructor(private readonly prisma: PrismaService) { }

    async get(search: Partial<Dispositivos> = {}, page: number = 1, pageSize: number = 10):
        Promise<{
            dispositivos: Dispositivos[];
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

        const total = await this.prisma.t_dispositivos.count();
        const dispositivos = await this.prisma.t_dispositivos.findMany({
            where,
            skip,
            take,
            include: {
                t_areas_sistemas: {
                    select: {
                        descripcion_ceco: true
                    }
                },
                t_colaboradores: {
                    select: {
                        num_control: true
                    }
                },
                t_propietario: {
                    select: {
                        nombre: true
                    }
                },
                t_ubicacion_fisica: {
                    select: {
                        descripcion: true
                    }
                },
                t_factura: {
                    select: {
                        folio_factura: true
                    }
                }
            }
        })
        return {
            dispositivos: dispositivos.map(d => ({
                ...DispositivosMapper.toDomain(d),
                descripcion_ceco: d.t_areas_sistemas.descripcion_ceco,
                num_control: d.t_colaboradores.num_control,
                nombre: d.t_propietario.nombre,
                descripcion: d.t_ubicacion_fisica.descripcion,
                folio_factura: d.t_factura.folio_factura
            })),
            total,
            totalPages: Math.ceil(total / pageSize),
            currentPage: page
        }
    }

    async create(dispositivo: Dispositivos): Promise<Dispositivos> {
        const created = await this.prisma.t_dispositivos.create({ data: DispositivosMapper.toPrisma(dispositivo) })
        return DispositivosMapper.toDomain(created)
    }

    async upadte(id_dispositivo: number, dispositivo: Partial<Dispositivos>): Promise<Dispositivos> {
        const updated = await this.prisma.t_dispositivos.update({
            where: { id_dispositivos: id_dispositivo },
            data: DispositivosMapper.partialToPrisma(dispositivo),
        })
        return DispositivosMapper.toDomain(updated)
    }

    async delete(id_dispositivo: number): Promise<void> {
        await this.prisma.t_dispositivos.delete({ where: { id_dispositivos: id_dispositivo } })
    }
}