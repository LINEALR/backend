import { Controller, Get, Post, Put, Delete, Body, Param, Inject, UseInterceptors, Query } from "@nestjs/common";
import { CacheInterceptor, CacheKey, CacheTTL } from "@nestjs/cache-manager";

import { GetColaboradoresDto } from "../dto/get-colaboradores.dto";
import type { CreateColaboradores } from "src/ports/in/nestjs/colaboradores/create-colaboradores.port";
import { CREATE_COLABORADORES_PORT } from "src/ports/in/nestjs/colaboradores/create-colaboradores.port";
import type { GetColaboradores } from "src/ports/in/nestjs/colaboradores/get-colababoradores.port";
import { GET_COLABORADORES_PORT } from "src/ports/in/nestjs/colaboradores/get-colababoradores.port";
import { Colaboradores } from "src/nestjs/domain/colaboradores/colaboradores.entity";
import type { GetAllColaboradores } from "src/ports/in/nestjs/colaboradores/get-all-colaboradores.ports";
import { GET_ALL_COLABORADORES_PORT } from "src/ports/in/nestjs/colaboradores/get-all-colaboradores.ports";
import type { UpdateColaboradores } from "src/ports/in/nestjs/colaboradores/update-colaboradores.port";
import { UPDATE_COLABORADORES_PORT } from "src/ports/in/nestjs/colaboradores/update-colaboradores.port";
import type { DeleteColaboradores } from "src/ports/in/nestjs/colaboradores/delete-colaboradores.port";
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
        private readonly deleteColaboradoresService: DeleteColaboradores,
    ) { }


    @Get('buscar')
    @UseInterceptors(CacheInterceptor)
    @CacheKey('obtain-colaborador')
    @CacheTTL(5)
    async get(@Query() search: GetColaboradoresDto) {
        return this.getColaboradoresService.execute(search);
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
    @CacheKey('delete-colaborador')
    @CacheTTL(5)
    async create(@Body() data: Partial<Colaboradores>) {
        return this.createColaboradoresService.execute(data);
    }

    @Put(':id_colaboradores')
    @UseInterceptors(CacheInterceptor)
    @CacheKey('update-colaborador')
    @CacheTTL(5)
    async update(
        @Param('id_colaboradores') id_colaboradores: number,
        @Body() data: Partial<Colaboradores>
    ) {
        return this.updateColaboradoresService.execute(Number(id_colaboradores), data);
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