import { Controller, Get, Post, Put, Delete, Body, Param, Inject, UseInterceptors, Query } from "@nestjs/common";
import { CacheInterceptor, CacheKey, CacheTTL } from "@nestjs/cache-manager";

import { AreasSistemas } from "src/domain/entities/areas-sistemas/areas-sistemas.entity";

import { GetAreasSistemasDto } from "./dtos/get-areas-sistemas.dto";
import { CreateAreasSistemasDto } from "./dtos/create-areas-sistemas.dto";
import { UpdateAreasSistemasDto } from "./dtos/update-areas-sistemas.dto";

import type { GetAreasSistemas } from "src/ports/in/areas-sistemas/get-areas-sistemas.port";
import type { CreateAreasSistemas } from "src/ports/in/areas-sistemas/create-areas-sistemas.port";
import type { UpdateAreasSistemas } from "src/ports/in/areas-sistemas/update-areas-sistemas.port";
import type { DeleteAreasSistemas } from "src/ports/in/areas-sistemas/delete-areas-sistemas.port";

import { GET_AREAS_SISTEMAS_PORT } from "src/ports/in/areas-sistemas/get-areas-sistemas.port";
import { CREATE_AREAS_SISTEMAS_PORT } from "src/ports/in/areas-sistemas/create-areas-sistemas.port";
import { UPDATE_AREAS_SISTEMAS_PORT } from "src/ports/in/areas-sistemas/update-areas-sistemas.port";
import { DELETE_AREAS_SISTEMAS_PORT } from "src/ports/in/areas-sistemas/delete-areas-sistemas.port";

@Controller('areas-sistemas')
export class AreasSistemasController {
    constructor(
        @Inject(GET_AREAS_SISTEMAS_PORT)
        private readonly getAreaSistemasService: GetAreasSistemas,

        @Inject(CREATE_AREAS_SISTEMAS_PORT)
        private readonly createAreaSistemasService: CreateAreasSistemas,

        @Inject(UPDATE_AREAS_SISTEMAS_PORT)
        private readonly updateAreaSistemasService: UpdateAreasSistemas,

        @Inject(DELETE_AREAS_SISTEMAS_PORT)
        private readonly deleteAreaSistemasService: DeleteAreasSistemas
    ) { }

    @Get('buscar')
    @UseInterceptors(CacheInterceptor)
    @CacheKey('get-areas-sistemas')
    @CacheTTL(5)
    async get(
        @Query() dto: GetAreasSistemasDto,
        @Query('page') page: number = 1,
        @Query('pageSize') pageSize: number = 10

    ) {
        return this.getAreaSistemasService.execute(dto, page, pageSize);
    }

    @Post()
    @UseInterceptors(CacheInterceptor)
    @CacheKey('create-areas-sistemas')
    @CacheTTL(5)
    async create(@Body() dto: CreateAreasSistemasDto) {
        console.log("Body recibido:", Body);
        return this.createAreaSistemasService.execute(dto);
    }

    @Put(':id_area')
    @UseInterceptors(CacheInterceptor)
    @CacheKey('update-areas-sistemas')
    @CacheTTL(5)
    async update(
        @Param('id_area') id_area: number,
        @Body() dto: UpdateAreasSistemasDto
    ) {
        return this.updateAreaSistemasService.execute(Number(id_area), dto);
    }

    @Delete(':id_area')
    @UseInterceptors(CacheInterceptor)
    @CacheKey('delete-areas-sistemas')
    @CacheTTL(5)
    async delete(@Param('id_area') id_area: number): Promise<{ message: string }> {
        await this.deleteAreaSistemasService.execute(Number(id_area));
        return { message: "Area Eliminada Correctamente" };
    }
}