import { Controller, Get, Post, Put, Delete, Body, Param, Inject, UseInterceptors, Query } from "@nestjs/common";
import { CacheInterceptor, CacheKey, CacheTTL } from "@nestjs/cache-manager";

import { ArticuloSistemas } from "src/domain/entities/articulo-sistemas/articulo-sistemas.entity";

import { GetArticuloSistemasDto } from "./dtos/get-articulo-sistemas.dto";
import { CreateArticuloSistemasDto } from "./dtos/creare-articulo-sistemas.dto";
import { UpdateArticuloSistemasDto } from "./dtos/update-articulo-sistemas.dto";

import type { GetArticuloSistemas } from "src/ports/in/articulo-sistemas/get-articulo-sistemas.port";
import type { CreateArticuloSistemas } from "src/ports/in/articulo-sistemas/create-articulo-sistemas.port";
import type { UpdateArticuloSistemas } from "src/ports/in/articulo-sistemas/update-articulo-sistemas.port";
import type { DeleteArticuloSistemas } from "src/ports/in/articulo-sistemas/delete-articulo-sistemas.port";

import { GET_ARTICULO_SISTEMAS_PORT } from "src/ports/in/articulo-sistemas/get-articulo-sistemas.port";
import { CREATE_ARTICULO_SISTEMAS_PORT } from "src/ports/in/articulo-sistemas/create-articulo-sistemas.port";
import { UPDATE_ARTICULO_SISTEMAS_PORT } from "src/ports/in/articulo-sistemas/update-articulo-sistemas.port";
import { DELETE_ARTICULO_SISTEMAS_PORT } from "src/ports/in/articulo-sistemas/delete-articulo-sistemas.port";

@Controller('articulo_sistemas')
export class ArticuloSistemasController {
    constructor(
        @Inject(GET_ARTICULO_SISTEMAS_PORT)
        private readonly getArticuloSistemasService: GetArticuloSistemas,
        @Inject(CREATE_ARTICULO_SISTEMAS_PORT)
        private readonly createArticuloSistemasService: CreateArticuloSistemas,
        @Inject(UPDATE_ARTICULO_SISTEMAS_PORT)
        private readonly updateArticuloSistemasService: UpdateArticuloSistemas,
        @Inject()
        private readonly deleteArticuloSistemasService: DeleteArticuloSistemas,
    ) { }


    @Get('buscar')
    @UseInterceptors(CacheInterceptor)
    @CacheKey('get-articulo-sistemas')
    @CacheTTL(5)
    async get(
        @Query() dto: GetArticuloSistemasDto,
        @Query('page') page: number = 1,
        @Query('pageSize') pageSize: number = 10
    ) {
        return this.getArticuloSistemasService.execute(dto, page, pageSize);
    }

    @Post()
    @UseInterceptors(CacheInterceptor)
    @CacheKey('create-articulo-sistemas')
    @CacheTTL(5)
    async create(@Body() dto: CreateArticuloSistemasDto) {
        return this.createArticuloSistemasService.execute(dto);
    }


    @Put(':id_articulo')
    @UseInterceptors(CacheInterceptor)
    @CacheKey('update-articulo-sistemas')
    @CacheTTL(5)
    async update(
        @Param('id_articulo') id_articulo: number,
        @Body() dto: UpdateArticuloSistemasDto
    ) {
        return this.updateArticuloSistemasService.execute(Number(id_articulo), dto);
    }

    @Delete(':id_articulo')
    @UseInterceptors(CacheInterceptor)
    @CacheKey('delete-articulo-sistemas')
    @CacheTTL(5)
    async delete(@Param('id_articulo') id_articulo: number): Promise<{ message: string }> {
        await this.deleteArticuloSistemasService.execute(Number(id_articulo));
        return { message: "Colaborador Eliminado Correctamente " };
    }
}