import { Controller, Get, Post, Put, Delete, Body, Param, Inject, UseInterceptors, Query } from "@nestjs/common";
import { CacheInterceptor, CacheKey, CacheTTL } from "@nestjs/cache-manager";

import { GetPropietarioDto } from "./dtos/get-propietario.dto";
import { CreatePropietarioDto } from "./dtos/create-propietario.dto";
import { UpdatePropietarioDto } from "./dtos/update-propietario.dto";

import { GET_PROPIETARIO_PORT, type GetPropietario } from "src/ports/in/propietario/get-propietario.port";
import { CREATE_PROPIETARIO_PORT, type CreatePropietario } from "src/ports/in/propietario/create-propietario.port";
import { UPDATE_PROPIETARIO_PORT, type UpdatePropietario } from "src/ports/in/propietario/update-propietario.port";
import { DELETE_PROPIETARIO_PORT, type DeletePropietario } from "src/ports/in/propietario/delete-propietario,port";

@Controller('propietario')
export class PropietarioController {
    constructor(
        @Inject(GET_PROPIETARIO_PORT)
        private readonly getPropietarioService: GetPropietario,
        @Inject(CREATE_PROPIETARIO_PORT)
        private readonly createPropietarioService: CreatePropietario,
        @Inject(UPDATE_PROPIETARIO_PORT)
        private readonly updatePropietarioService: UpdatePropietario,
        @Inject(DELETE_PROPIETARIO_PORT)
        private readonly deletePropietarioService: DeletePropietario
    ) { }


    @Get('buscar')
    @UseInterceptors(CacheInterceptor)
    @CacheKey('get-propietario')
    @CacheTTL(5)
    async get(
        @Query() dto: GetPropietarioDto,
        @Query('page') page: number = 1,
        @Query('pageSize') pageSize: number = 10
    ) {
        return this.getPropietarioService.execute(dto, page, pageSize);
    }

    @Post()
    @UseInterceptors(CacheInterceptor)
    @CacheKey('create-propietario')
    @CacheTTL(5)
    async create(@Body() dto: CreatePropietarioDto) {
        return this.createPropietarioService.execute(dto);
    }

    @Put(':id_propietario')
    @UseInterceptors(CacheInterceptor)
    @CacheKey('update-propietario')
    @CacheTTL(5)
    async update(
        @Param('id_propietario') id_propietario: number,
        @Body() dto: UpdatePropietarioDto
    ) {
        return this.updatePropietarioService.execute(Number(id_propietario), dto);
    }

    @Delete(':id_propietario')
    @UseInterceptors(CacheInterceptor)
    @CacheKey('delete-propietario')
    @CacheTTL(5)
    async delete(@Param('id_propietario') id_propietario: number): Promise<{ message: string }> {
        await this.deletePropietarioService.execute(Number(id_propietario));
        return { message: "Propietario Eliminado Correctamente " };
    }
}