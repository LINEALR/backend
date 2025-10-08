import { PrismaService } from "src/infraestructure/prisma/postgresql/prisma.service";
import type { DispositivosRepository } from "src/domain/dispositivo/dispositivos.repository";
import { Dispositivos } from "src/domain/dispositivo/dispositivos.entity";
import { Injectable } from "@nestjs/common";
import { DispositivosMapper } from "./mappers/dispositivos.mapper";
import { distinct } from "rxjs";

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
                t_areas_sistemas: { select: { descripcion_ceco: true } },
                t_colaboradores: { select: { num_control: true } },
                t_propietario: { select: { nombre: true } },
                t_ubicacion_fisica: { select: { descripcion: true } },
                t_factura: { select: { folio_factura: true } }
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

        // return {
        //     dispositivos: dispositivos.map(d => ({
        //         ...DispositivosMapper.toDomain(d),
        //         descripcion_ceco: d.id_area === 0 ? "Desconocido" : d.t_areas_sistemas?.descripcion_ceco,
        //         nombre_usuario: d.id_usuario === 0 ? "Sin usuario asignado" : d.t_usuarios?.nombre,
        //         folio_factura: d.id_factura === 0 ? "Sin factura" : d.t_facturas?.folio_factura,
        //         nombre_propietario: d.id_propietario === 0 ? "Sin propietario" : d.t_propietarios?.nombre
        //     }))
        // };
    }

    async create(dispositivo: Dispositivos): Promise<Dispositivos> {
        const dispositivoUnique = {
            ...dispositivo,
            id_area: dispositivo.id_area ?? 0,
            num_control: dispositivo.num_control ?? 0,
            codigo_propietario: dispositivo.codigo_propietario ?? 0,
            codigo_ubicacion: dispositivo.codigo_ubicacion ?? 0,
            id_factura: dispositivo.id_factura ?? 0
        }
        const created = await this.prisma.t_dispositivos.create({ data: DispositivosMapper.toPrisma(dispositivoUnique) })
        return DispositivosMapper.toDomain(created)
    }

    async upadte(id_dispositivo: number, dispositivo: Partial<Dispositivos>): Promise<Dispositivos> {
        const dataToUpdate = {
            ...DispositivosMapper.partialToPrisma(dispositivo),
            id_area: dispositivo.id_area ?? 0,
            num_control: dispositivo.num_control ?? 0,
            codigo_propietario: dispositivo.codigo_propietario ?? 0,
            codigo_ubicacion: dispositivo.codigo_ubicacion ?? 0,
            id_factura: dispositivo.id_factura ?? 0
        };

        const updated = await this.prisma.t_dispositivos.update({
            where: { id_dispositivos: id_dispositivo },
            data: dataToUpdate,
        });
        
        return DispositivosMapper.toDomain(updated)
    }

    async delete(id_dispositivo: number): Promise<void> {
        await this.prisma.t_dispositivos.delete({ where: { id_dispositivos: id_dispositivo } })
    }
}