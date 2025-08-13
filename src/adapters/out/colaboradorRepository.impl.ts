import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/infraestructure/prisma/prisma.service";
import { ColaboradorRepositoyPort } from "src/ports/out/colaboradores/colaborador-repository.port";
import { Colaboradores } from "src/domain/colaboradores/colaboradores.entity";

@Injectable()
export class ColaboradorRepositoryImpl implements ColaboradorRepositoyPort {
    constructor(private readonly prisma: PrismaService) { }

    async getAll(): Promise<Colaboradores[]> {
        const colaborador = await this.prisma.t_colaboradores.findMany();
        return colaborador.map(col => new Colaboradores({
            id_colaboradores: col.id_colaboradores,
            num_control: col.num_control,
            nombre: col.nombre,
            correo: col.correo,
            id_area: col.id_area
        }))
    }

    async getById(id_colaboradores: number): Promise<Colaboradores | null> {
        const colaborador = await this.prisma.t_colaboradores.findUnique({ where: { id_colaboradores } });
        return colaborador ? new Colaboradores({
            id_colaboradores: colaborador.id_colaboradores,
            num_control: colaborador.num_control,
            nombre: colaborador.nombre,
            correo: colaborador.correo,
            id_area: colaborador.id_area
        }) : null;
    }

    async create(colaborador: Colaboradores): Promise<Colaboradores> {
        const created = await this.prisma.t_colaboradores.create({
            data: {
                num_control: colaborador.num_control,
                nombre: colaborador.nombre,
                correo: colaborador.correo,
                id_area: colaborador.id_area,
            },
        });
        console.log(created)
        return new Colaboradores({ 
            num_control: created.num_control,
            nombre: created.nombre,
            correo: created.correo,
            id_area: created.id_area
        });
    }

    async update(colaborador: Colaboradores): Promise<Colaboradores> {
        const updated = await this.prisma.t_colaboradores.update({
            where: { id_colaboradores: colaborador.id_colaboradores },
            data: {
                num_control: colaborador.num_control,
                nombre: colaborador.nombre,
                correo: colaborador.correo,
                id_area: colaborador.id_area,
            },
        });
        return new Colaboradores({
            id_colaboradores: colaborador.id_colaboradores,
            num_control: colaborador.num_control,
            nombre: colaborador.nombre,
            correo: colaborador.correo,
            id_area: colaborador.id_area
        })
    }

    async delete(id_colaboradores: number): Promise<void> {
        await this.prisma.t_colaboradores.delete({ where: { id_colaboradores } });
    }
}