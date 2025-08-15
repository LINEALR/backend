import { Controller, Get, Post, Put, Delete, Body, Param, Inject } from "@nestjs/common";
import type{ CreateColaboradores } from "src/ports/in/colaboradores/create-colaboradores.port";
import { CREATE_COLABORADORES_PORT } from "src/ports/in/colaboradores/create-colaboradores.port";
import type{ GetColaboradores } from "src/ports/in/colaboradores/get-colababoradores.port";
import { GET_COLABORADORES_PORT } from "src/ports/in/colaboradores/get-colababoradores.port"; 
import { Colaboradores } from "src/domain/colaboradores/colaboradores.entity";

@Controller('colaboradores')
export class ColaboradoresController {
    constructor(
        @Inject(CREATE_COLABORADORES_PORT)
        private readonly createColaboradoresService: CreateColaboradores,
       
        @Inject(GET_COLABORADORES_PORT)
        private readonly getColaboradoresService: GetColaboradores,
    ) {}
    

    @Get(':id_colaboradores')
    async getById(@Param('id_colaboradores') id_colaboradores:  number) {
        return this.getColaboradoresService.execute(Number(id_colaboradores))
    }

    @Post()
    async create(@Body() data: Partial<Colaboradores>) {
        return this.createColaboradoresService.execute(data);
    }
}