import { Controller, Get, Post, Put, Delete, Body, Param, Inject, UseInterceptors, Query } from "@nestjs/common";
import { CacheInterceptor, CacheKey, CacheTTL } from "@nestjs/cache-manager";

import { GetColaboradoresDto } from "./dtos/get-colaboradores.dto";
import { CreateColaboradoresDto } from "./dtos/create-colaboradores.dto";
import { UpdateColaboradoresDto } from "./dtos/update-colaboradores.dto";

import { GET_COLABORADORES_PORT, type GetColaboradores } from "src/ports/in/colaboradores/get-colababoradores.port";
import { CREATE_COLABORADORES_PORT, type CreateColaboradores } from "src/ports/in/colaboradores/create-colaboradores.port";
import { UPDATE_COLABORADORES_PORT, type UpdateColaboradores } from "src/ports/in/colaboradores/update-colaboradores.port";
import { DELETE_COLABORADORES_PORT, type DeleteColaboradores } from "src/ports/in/colaboradores/delete-colaboradores.port";

@Controller('colaboradores')
export class ColaboradoresController {
    constructor(
        @Inject(GET_COLABORADORES_PORT)
        private readonly getColaboradoresService: GetColaboradores,

        @Inject(CREATE_COLABORADORES_PORT)
        private readonly createColaboradoresService: CreateColaboradores,

        @Inject(UPDATE_COLABORADORES_PORT)
        private readonly updateColaboradoresService: UpdateColaboradores,

        @Inject(DELETE_COLABORADORES_PORT)
        private readonly deleteColaboradoresService: DeleteColaboradores
    ) { }

    @Get('buscar')
    @UseInterceptors(CacheInterceptor)
    @CacheKey('get-colaborador')
    @CacheTTL(5)
    async get(@Query() dto: GetColaboradoresDto) {
        return this.getColaboradoresService.execute(dto);
    }

    @Post()
    @UseInterceptors(CacheInterceptor)
    @CacheKey('create-colaborador')
    @CacheTTL(5)
    async create(@Body() dto: CreateColaboradoresDto) {
        return this.createColaboradoresService.execute(dto);
    }

    @Put(':id_colaboradores')
    @UseInterceptors(CacheInterceptor)
    @CacheKey('update-colaborador')
    @CacheTTL(5)
    async update(
        @Param('id_colaboradores') id_colaboradores: number,
        @Body() dto: UpdateColaboradoresDto
    ) {
        return this.updateColaboradoresService.execute(Number(id_colaboradores), dto);
    }

    @Delete(':id_colaboradores')
    @UseInterceptors(CacheInterceptor)
    @CacheKey('delete-colaborador')
    @CacheTTL(5)
    async delete(@Param('id_colaboradores') id_colaborador: number): Promise<{ message: string }> {
        await this.deleteColaboradoresService.execute(Number(id_colaborador));
        return { message: "Colaborador Eliminado Correctamente " };
    }
}