import { Controller, Get, Post, Put, Delete, Body, Param, Inject, UseInterceptors, Query } from "@nestjs/common";
import { CacheInterceptor, CacheKey, CacheTTL } from "@nestjs/cache-manager";

import { GetHistorialArticuloDto } from "./dtos/get-historial-articulo.dto";
import { CreateHistorialArticuloDto } from "./dtos/create-historial-articulo.dto";
import { UpdateHistorialArticuloDto } from "./dtos/update-historial-articulo.dto";

import { GET_HISTORIAL_ARTICULO_PORT, type GetHistorialArticulo } from "src/ports/in/historial-articulo/get-historial-articulo.port";
import { CREATE_HISTORIAL_ARTICULO_PORT, type CreateHistorialArticulo } from "src/ports/in/historial-articulo/create-historial-articulo.port";
import { UPDATE_HISTORIAL_ARTICULO_PORT, type UpdateHistorialArticulo } from "src/ports/in/historial-articulo/update-historial-articulo.port";
import { DELETE_HISTORIAL_ARTICULO_PORT, type DeleteHistorialArticulo } from "src/ports/in/historial-articulo/delete-historial-articulo.port";

@Controller('historial-articulo')
export class HistorialArticuloController {
    constructor(
        @Inject(GET_HISTORIAL_ARTICULO_PORT)
        private readonly getHistorialArticuloService: GetHistorialArticulo,

        @Inject(CREATE_HISTORIAL_ARTICULO_PORT)
        private readonly createHistorialArticuloService: CreateHistorialArticulo,

        @Inject(UPDATE_HISTORIAL_ARTICULO_PORT)
        private readonly updateHistorialArticuloService: UpdateHistorialArticulo,

        @Inject(DELETE_HISTORIAL_ARTICULO_PORT)
        private readonly deleteHistorialArticuloService: DeleteHistorialArticulo,
    ) { }

    @Get('buscar')
    @UseInterceptors(CacheInterceptor)
    @CacheKey('get-historial-articulo')
    @CacheTTL(5)
    async get(
        @Query() dto: GetHistorialArticuloDto,
        @Query('page') page: number = 1,
        @Query('pageSize') pageSize: number = 10
    ) {
        return this.getHistorialArticuloService.execute(dto, page, pageSize);
    }

    @Post()
    @UseInterceptors(CacheInterceptor)
    @CacheKey('create-historial-articulo')
    @CacheTTL(5)
    async create(@Body() dto: CreateHistorialArticuloDto) {
        return this.createHistorialArticuloService.execute(dto);
    }

    @Put(':id_historial')
    @UseInterceptors(CacheInterceptor)
    @CacheKey('update-historial-articulo')
    @CacheTTL(5)
    async update(
        @Param('id_historial') id_historial: number,
        @Body() dto: UpdateHistorialArticuloDto
    ) {
        return this.updateHistorialArticuloService.execute(Number(id_historial), dto);
    }

    @Delete(':id_historial')
    @UseInterceptors(CacheInterceptor)
    @CacheKey('delete-historial')
    @CacheTTL(5)
    async delete(@Param('id_historial') id_historial: number): Promise<{ message: string }> {
        await this.deleteHistorialArticuloService.execute(Number(id_historial));
        return { message: "Historial Eliminado Correctamente " };
    }
}