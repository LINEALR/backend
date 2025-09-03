import { Controller, Get, Post, Put, Delete, Body, Param, Inject, UseInterceptors, Query } from "@nestjs/common";
import { CacheInterceptor, CacheKey, CacheTTL } from "@nestjs/cache-manager";

import { GetUbicacionFisicaDto } from "./dtos/get-ubicacion-fisica.dto";
import { CreateUbicacionFisicaDto } from "./dtos/create-ubicacion-fisica.dto";
import { UpdateUbicacionFisicaDto } from "./dtos/update-ubicacion-fisica.dto";

import { GET_UBICACION_FISICA_PORT, type GetUbicacionFisica } from "src/ports/in/ubicacion-fisica/get-ubicacion-fisica.port";
import { CREATE_UBICACION_FISICA_PORT, type CreateUbicacionFisica } from "src/ports/in/ubicacion-fisica/create-ubicacion-fisica.port";
import { UPDATE_UBICACION_FISICA_PORT, type UpdateUbicacionFisica } from "src/ports/in/ubicacion-fisica/update-ubicacion-fisica.port";
import { DELETE_UBICACION_FISICA_PORT, type DeleteUbicacionFisica } from "src/ports/in/ubicacion-fisica/delete-ubicacion-fisica.port";

@Controller('ubicacion-fisica')
export class UbicacionFisicaController {
    constructor(
        @Inject(GET_UBICACION_FISICA_PORT)
        private readonly getUbicacionFisicaService: GetUbicacionFisica,

        @Inject(CREATE_UBICACION_FISICA_PORT)
        private readonly createUbicacionFisicaService: CreateUbicacionFisica,

        @Inject(UPDATE_UBICACION_FISICA_PORT)
        private readonly updateUbicacionFisicaService: UpdateUbicacionFisica,

        @Inject(DELETE_UBICACION_FISICA_PORT)
        private readonly deleteUbicacionFisicaService: DeleteUbicacionFisica
    ) { }

    @Get('buscar')
    @UseInterceptors(CacheInterceptor)
    @CacheKey('get-ubicacion-fisica')
    @CacheTTL(5)
    async get(@Query() dto: GetUbicacionFisicaDto) {
        return this.getUbicacionFisicaService.execute(dto);
    }

    @Post()
    @UseInterceptors(CacheInterceptor)
    @CacheKey('create-ubicacion-fisica')
    @CacheTTL(5)
    async create(@Body() dto: CreateUbicacionFisicaDto) {
        return this.createUbicacionFisicaService.execute(dto);
    }

    @Put(':id_ubicacion')
    @UseInterceptors(CacheInterceptor)
    @CacheKey('update-ubicacion-fisica')
    @CacheTTL(5)
    async update(
        @Param('id_ubicacion') id_ubicacion: number,
        @Body() dto: UpdateUbicacionFisicaDto
    ) {
        return this.updateUbicacionFisicaService.execute(Number(id_ubicacion), dto);
    }

    @Delete(':id_ubicacion')
    @UseInterceptors(CacheInterceptor)
    @CacheKey('delete-ubicacion-fisica')
    @CacheTTL(5)
    async delete(@Param('id_ubicacion') id_ubicacion: number): Promise<{ message: string }> {
        await this.deleteUbicacionFisicaService.execute(Number(id_ubicacion));
        return { message: "UbicacionFisica Eliminado Correctamente " };
    }
}