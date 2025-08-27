import { Controller, Get, Post, Put, Delete, Body, Param, Inject, UseInterceptors, Query } from "@nestjs/common";
import { CacheInterceptor, CacheKey, CacheTTL } from "@nestjs/cache-manager";

import { Dispositivos } from "src/domain/dispositivo/disposivos.entity";

import { GetDispositivosDto } from "./dtos/get-dispositivos.dto";
import { CreateDispositivosDto } from "./dtos/create-dispositivos.dto";
import { UpdateDispositivosDto } from "./dtos/update-dispositivos.dto";

import type { GetDispositivos } from "src/ports/in/dipositivos/get-dispositivos.port";
import type { CreateDispositivos } from "src/ports/in/dipositivos/create-dispositivos.port";
import type { UpdateDispositivos } from "src/ports/in/dipositivos/update-dispositivos.port";
import type { DeleteDispositivos } from "src/ports/in/dipositivos/delete-dipositivos.port";

import { GET_DISPOSITIVOS_PORT } from "src/ports/in/dipositivos/get-dispositivos.port";
import { CREATE_DISPOSITIVOS_PORT } from "src/ports/in/dipositivos/create-dispositivos.port";
import { UPDATE_DISPOSITIVOS_PORT } from "src/ports/in/dipositivos/update-dispositivos.port";
import { DELETE_DISPOSITIVOS_PORT } from "src/ports/in/dipositivos/delete-dipositivos.port";
import { UpdateColaboradoresDto } from "../colaboradores/dtos/update-colaboradores.dto";

@Controller('dispositivos')
export class DispositivosController {
    constructor(
        @Inject(GET_DISPOSITIVOS_PORT)
        private readonly getDispositivosService: GetDispositivos,

        @Inject(CREATE_DISPOSITIVOS_PORT)
        private readonly createDispositivosService: CreateDispositivos,

        @Inject(UPDATE_DISPOSITIVOS_PORT)
        private readonly updateDispositivosService: UpdateDispositivos,

        @Inject(DELETE_DISPOSITIVOS_PORT)
        private readonly deleteDispositivosService: DeleteDispositivos
    ) {}

    @Get('buscar')
    @UseInterceptors(CacheInterceptor)
    @CacheKey('obtain-dispositivos')
    @CacheTTL(5)
    async get(@Query() dto: GetDispositivosDto){
        return this.getDispositivosService.execute(dto);
    }

    @Post()
    @UseInterceptors(CacheInterceptor)
    @CacheKey('create-dispositivos')
    @CacheTTL(5)
    async create(@Body() dto: CreateDispositivosDto) {
        return this.createDispositivosService.execute(dto)
    }

    @Put(':id_dispositivos')
    @UseInterceptors(CacheInterceptor)
    @CacheKey('update-dispositivos')
    @CacheTTL(5)
    async update(
        @Param('id_dipositivos') id_dispoitivos: number,
        @Body() dto: UpdateColaboradoresDto
    ){
        return this.updateDispositivosService.execute(Number(id_dispoitivos), dto)
    }

    @Delete(':id_dispositivos')
    @UseInterceptors(CacheInterceptor)
    @CacheKey('delete-dispositivos')
    @CacheTTL(5)
    async delete(@Param('id_dispositivos') id_dispositivo: number): Promise<{ message: string}> {
        await this.deleteDispositivosService.execute(Number(id_dispositivo));
        return { message: "Dispositivo eliminado con éxito" };
    }    
}