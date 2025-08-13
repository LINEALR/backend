import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ColaboradorService } from "src/application/colaboradores/colaboradoresCRUD.service";
import { Colaboradores } from "src/domain/colaboradores/colaboradores.entity";
import { ColaboradorRepositoryImpl } from "../out/colaboradorRepository.impl";

@Controller('colaboradores')
export class ColaboradorController {
    private readonly colaboradorService: ColaboradorService;

    constructor(private readonly colaboradorRepository: ColaboradorRepositoryImpl) {
        this.colaboradorService = new ColaboradorService(this.colaboradorRepository);
    }

    @Get()
    async getAll(): Promise<Colaboradores[]> {
        return this.colaboradorService.getAllColaborador();
    }

    @Get(':id_colaboradores')
    async findOne(@Param('id_colaboradores') id_colaboradores: number): Promise<Colaboradores> {
        return this.colaboradorService.getColaborador(Number(id_colaboradores))
    }

    @Post()
    async create(@Body() body: { num_control: number; nombre: string, correo: string, id_area: number }): Promise<Colaboradores> {
        const colaborador = new Colaboradores({
            num_control: body.num_control,
            nombre: body.nombre,
            correo: body.correo,
            id_area: body.id_area
        });
        return this.colaboradorService.createColaborador(colaborador);
    }

    @Put(':id_colaboradores')
    async update(
        @Param('id_colaboradores') id_colaboradores: number,
        @Body() body: { num_control: number, nombre: string, correo: string, id_area: number },
    ): Promise<Colaboradores> {
        const colaborador = new Colaboradores({
            id_colaboradores: Number(id_colaboradores),
            num_control: body.num_control,
            nombre: body.nombre,
            correo: body.correo,
            id_area: body.id_area
        });
        return this.colaboradorService.updateColaborador(colaborador);
    }

    @Delete(':id_colaboradores')
    async delete(@Param('id_colaboradores') id_colaboradores: number): Promise<void> {
        return this.colaboradorService.deleteColaborador(Number(id_colaboradores))
    }
}