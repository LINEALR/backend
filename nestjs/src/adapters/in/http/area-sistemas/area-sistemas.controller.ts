import { Controller, Get, Post, Put, Delete, Body, Param, Inject, UseInterceptors, Query } from "@nestjs/common";
import { CacheInterceptor, CacheKey, CacheTTL } from "@nestjs/cache-manager";

import { AreaSistemas } from "src/domain/area-sistemas/area-sistemas.entity";

import { GetAreaSistemasDto } from "./dtos/get-area-sistemas.dto";
import { CreateAreaSistemasDto } from "./dtos/create-area-sistemas.dto";
import { UpdateAreaSistemasDto } from "./dtos/update-area-sistemas.dto";

import type { GetAreaSistemas } from "src/ports/in/area-sistemas/get-area-sistemas.port";
import type { CreateAreaSistemas } from "src/ports/in/area-sistemas/create-area-sistemas.port";
import type { UpdateAreaSistemas } from "src/ports/in/area-sistemas/update-area-sistemas.port";
import type { DeleteAreaSistemas } from "src/ports/in/area-sistemas/delete-area-sistemas.port";

import { GET_AREA_SISTEMAS_PORT } from "src/ports/in/area-sistemas/get-area-sistemas.port";
import { CREATE_AREA_SISTEMAS_PORT } from "src/ports/in/area-sistemas/create-area-sistemas.port";
import { UPDATE_AREA_SISTEMAS_PORT } from "src/ports/in/area-sistemas/update-area-sistemas.port";
import { DELETE_AREA_SISTEMAS_PORT } from "src/ports/in/area-sistemas/delete-area-sistemas.port";

@Controller('area-sistemas')
export class AreaSistemasController {
    constructor(
        @Inject(GET_AREA_SISTEMAS_PORT)
        private readonly getAreaSistemasService: GetAreaSistemas,

        @Inject(CREATE_AREA_SISTEMAS_PORT)
        private readonly createAreaSistemasService: CreateAreaSistemas,

        @Inject(UPDATE_AREA_SISTEMAS_PORT)
        private readonly updateAreaSistemasService: UpdateAreaSistemas,

        @Inject(DELETE_AREA_SISTEMAS_PORT)
        private readonly deleteAreaSistemasService: DeleteAreaSistemas
    ) { }

    @Get()
    @UseInterceptors(CacheInterceptor)
    @CacheKey('get-area-sistemas')
    @CacheTTL(5)
    async get(@Query() dto: GetAreaSistemasDto) {
        return this.getAreaSistemasService.execute(dto);
    }

    @Post()
    @UseInterceptors(CacheInterceptor)
    @CacheKey('create-area-sistemas')
    @CacheTTL(5)
    async create(@Body() dto: CreateAreaSistemasDto) {
        return this.createAreaSistemasService.execute(dto);
    }

    @Put(':id_area')
    @UseInterceptors(CacheInterceptor)
    @CacheKey('update-area-sistemas')
    @CacheTTL(5)
    async update(
        @Param('id_area') id_area: number,
        @Body() dto: UpdateAreaSistemasDto
    ) {
        return this.updateAreaSistemasService.execute(Number(id_area), dto);
    }

    @Delete(':id_area')
    @UseInterceptors(CacheInterceptor)
    @CacheKey('delete-area-sistemas')
    @CacheTTL(5)
    async delete(@Param('id_area') id_area: number): Promise<{ message: string }> {
        await this.deleteAreaSistemasService.execute(Number(id_area));
        return { message: "Area Eliminada Correctamente" };
    }
}