import { Controller, Get, Post, Put, Delete, Body, Param, Inject, UseInterceptors, Query } from "@nestjs/common";
import { CacheInterceptor, CacheKey, CacheTTL } from "@nestjs/cache-manager";

import { Dispositivos } from "src/domain/entities/dispositivo/dispositivos.entity";

import { GetDispositivosDto } from "./dtos/get-dispositivos.dto";
import { CreateDispositivosDto } from "./dtos/create-dispositivos.dto";
import { UpdateDispositivosDto } from "./dtos/update-dispositivos.dto";
import { AgregarAsignacionDto } from "./dtos/agregar-asignacion.dto";

import { type GetDispositivos, GET_DISPOSITIVOS_PORT } from "src/ports/in/dipositivos/get-dispositivos.port";
import { type CreateDispositivos, CREATE_DISPOSITIVOS_PORT } from "src/ports/in/dipositivos/create-dispositivos.port";
import { type UpdateDispositivos, UPDATE_DISPOSITIVOS_PORT } from "src/ports/in/dipositivos/update-dispositivos.port";
import { type DeleteDispositivos, DELETE_DISPOSITIVOS_PORT } from "src/ports/in/dipositivos/delete-dipositivos.port";
import { type AsignarDispositivo, ASIGNAR_DISPOSITIVO_PORT } from "src/ports/in/dipositivos/asignar-dispositivo.port";
import { type AgregarAsignacion, AGREGAR_CON_ASIGNACION_PORT } from "src/ports/in/dipositivos/agregar-asignacion.port";

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
        private readonly deleteDispositivosService: DeleteDispositivos,

        @Inject(ASIGNAR_DISPOSITIVO_PORT)
        private readonly asignarDispositivosService: AsignarDispositivo,

        @Inject(AGREGAR_CON_ASIGNACION_PORT)
        private readonly agregarAsignacionService: AgregarAsignacion,
    ) { }

    @Get('buscar')
    @UseInterceptors(CacheInterceptor)
    @CacheKey('obtain-dispositivos')
    @CacheTTL(5)
    async get(
        @Query() dto: GetDispositivosDto,
        @Query('page') page: number = 1,
        @Query('pageSize') pageSize: number = 10
    ) {
        return this.getDispositivosService.execute(dto, page, pageSize);
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
        @Body() dto: UpdateDispositivosDto
    ) {
        return this.updateDispositivosService.execute(Number(id_dispoitivos), dto)
    }

    @Delete(':id_dispositivos')
    @UseInterceptors(CacheInterceptor)
    @CacheKey('delete-dispositivos')
    @CacheTTL(5)
    async delete(@Param('id_dispositivos') id_dispositivos: number): Promise<{ message: string }> {
        await this.deleteDispositivosService.execute(Number(id_dispositivos));
        return { message: "Dispositivo eliminado con éxito" };
    }

    @Put('asignar/:id_dispositivos')
    @UseInterceptors(CacheInterceptor)
    @CacheKey('asignar-dispositivos')
    @CacheTTL(5)
    async asignar(
        @Param('id_dispositivos') id_dispositivos: number,
        @Body() dto: { num_control: number }
    ) {
        return this.asignarDispositivosService.execute({
            id_dispositivos,
            num_control: dto.num_control
        });
    } 

    @Post('asignado')
    @UseInterceptors(CacheInterceptor)
    @CacheKey('create-dispositivo-asignado')
    @CacheTTL(5)
    async agregar_asignacion(@Body() dto: AgregarAsignacionDto) {
        return this.agregarAsignacionService.execute(dto)
    }
}