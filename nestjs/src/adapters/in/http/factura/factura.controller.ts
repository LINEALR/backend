import { Controller, Get, Post, Put, Delete, Body, Param, Inject, UseInterceptors, Query } from "@nestjs/common";
import { CacheInterceptor, CacheKey, CacheTTL } from "@nestjs/cache-manager";

import { GetFacturaDto } from "./dtos/get-factura.dto";
import { CreateFacturaDto } from "./dtos/create-factura.dto";
import { UpdateFacturaDto } from "./dtos/update-factura.dto";

import { type GetFactura, GET_FACTURA_PORT } from "src/ports/in/factura/get-factura.port";
import { type CreateFactura, CREATE_FACTURA_PORT } from "src/ports/in/factura/create-factura.port";
import { type UpdateFactura, UPDATE_FACTURA_PORT } from "src/ports/in/factura/update-factura.port";
import { type DeleteFactura, DELETE_FACTURA_PORT } from "src/ports/in/factura/delete-factura.port";

@Controller('factura')
export class FacturaController {
    constructor(
        @Inject(GET_FACTURA_PORT)
        private readonly getFacturaService: GetFactura,

        @Inject(CREATE_FACTURA_PORT)
        private readonly createFacturaService: CreateFactura,

        @Inject(UPDATE_FACTURA_PORT)
        private readonly updateFacturaService: UpdateFactura,

        @Inject(DELETE_FACTURA_PORT)
        private readonly deleteFacturaService: DeleteFactura
    ) { }

    @Get('buscar')
    @UseInterceptors(CacheInterceptor)
    @CacheKey('get-factura')
    @CacheTTL(5)
    async get(@Query() dto: GetFacturaDto) {
        return this.getFacturaService.execute(dto);
    }

    @Post()
    @UseInterceptors(CacheInterceptor)
    @CacheKey('create-factura')
    @CacheTTL(5)
    async create(@Body() dto: CreateFacturaDto) {
        return this.createFacturaService.execute(dto);
    }

    @Put(':id_factura')
    @UseInterceptors(CacheInterceptor)
    @CacheKey('update-factura')
    @CacheTTL(5)
    async update(
        @Param('id_factura') id_factura: number,
        @Body() dto: UpdateFacturaDto
    ) {
        return this.updateFacturaService.execute(Number(id_factura), dto);
    }

    @Delete(':id_factura')
    @UseInterceptors(CacheInterceptor)
    @CacheKey('delete-factura')
    @CacheTTL(5)
    async delete(@Param('id_factua') id_factura: number): Promise<{ message: string }> {
        await this.deleteFacturaService.execute(Number(id_factura));
        return { message: "Colaborador Eliminado Correctamente" };
    }
}
