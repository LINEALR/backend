import { Controller, Get, Post, Put, Delete, Body, Param, Inject, UseInterceptors, Query } from "@nestjs/common";
import { CacheInterceptor, CacheKey, CacheTTL } from "@nestjs/cache-manager";

import { Colaboradores } from "src/nestjs/domain/colaboradores/colaboradores.entity";

import { GetColaboradoresDto } from "./dtos/get-colaboradores.dto";
import { CreateColaboradoresDto } from "./dtos/create-colaboradores.dto";
import { UpdateColaboradoresDto } from "./dtos/update-colaboradores.dto";

import type { GetColaboradores } from "src/ports/in/nestjs/colaboradores/get-colababoradores.port";
import type { GetAllColaboradores } from "src/ports/in/nestjs/colaboradores/get-all-colaboradores.ports";
import type { CreateColaboradores } from "src/ports/in/nestjs/colaboradores/create-colaboradores.port";
import type { UpdateColaboradores } from "src/ports/in/nestjs/colaboradores/update-colaboradores.port";
import type { DeleteColaboradores } from "src/ports/in/nestjs/colaboradores/delete-colaboradores.port";

import { GET_COLABORADORES_PORT } from "src/ports/in/nestjs/colaboradores/get-colababoradores.port";
import { GET_ALL_COLABORADORES_PORT } from "src/ports/in/nestjs/colaboradores/get-all-colaboradores.ports";
import { CREATE_COLABORADORES_PORT } from "src/ports/in/nestjs/colaboradores/create-colaboradores.port";
import { UPDATE_COLABORADORES_PORT } from "src/ports/in/nestjs/colaboradores/update-colaboradores.port";
import { DELETE_COLABORADORES_PORT } from "src/ports/in/nestjs/colaboradores/delete-colaboradores.port";

@Controller('colaboradores')
export class ColaboradoresController {
    constructor(
        @Inject(GET_COLABORADORES_PORT)
        private readonly getColaboradoresService: GetColaboradores,

        @Inject(GET_ALL_COLABORADORES_PORT)
        private readonly getAllColaboradoresService: GetAllColaboradores,

        @Inject(CREATE_COLABORADORES_PORT)
        private readonly createColaboradoresService: CreateColaboradores,

        @Inject(UPDATE_COLABORADORES_PORT)
        private readonly updateColaboradoresService: UpdateColaboradores,

        @Inject(DELETE_COLABORADORES_PORT)
        private readonly deleteColaboradoresService: DeleteColaboradores
    ) { }


    @Get('buscar')
    @UseInterceptors(CacheInterceptor)
    @CacheKey('obtain-colaborador')
    @CacheTTL(5)
    async get(@Query() dto: GetColaboradoresDto) {
        return this.getColaboradoresService.execute(dto);
    }

    @Get()
    @UseInterceptors(CacheInterceptor)
    @CacheKey('obtain-colaborador')
    @CacheTTL(5)
    async getAll(): Promise<Colaboradores[]> {
        return this.getAllColaboradoresService.execute();
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