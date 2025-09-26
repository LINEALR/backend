import { Controller, Get, Post, Put, Delete, Body, Param, Inject, UseInterceptors, Query } from "@nestjs/common";
import { CacheInterceptor, CacheKey, CacheTTL } from "@nestjs/cache-manager";

import { Usuario } from "src/domain/usuario/usuario.entity";

import { GetUsuarioDto } from "./dtos/get-usuario.dto";
import { CreateUsuarioDto } from "./dtos/create-usuario.dto";
import { UpdateUsuarioDto } from "./dtos/update-usuario.dto";

import type { GetUsuario } from "src/ports/in/usuario/get-usuario.port";
import type { CreateUsuario } from "src/ports/in/usuario/create-usuario.port";
import type { UpdateUsuario } from "src/ports/in/usuario/update-usuario.port";
import type { DeleteUsuario } from "src/ports/in/usuario/delete-usuario.port";

import { GET_USUARIO_PORT } from "src/ports/in/usuario/get-usuario.port";
import { CREATE_USUARIO_PORT } from "src/ports/in/usuario/create-usuario.port";
import { UPDATE_USUARIO_PORT } from "src/ports/in/usuario/update-usuario.port";
import { DELETE_USUARIO_PORT } from "src/ports/in/usuario/delete-usuario.port";

@Controller('usuario')
export class UsuarioController {
    constructor(
        @Inject(GET_USUARIO_PORT)
        private readonly getUsuarioService: GetUsuario,

        @Inject(CREATE_USUARIO_PORT)
        private readonly createUsuarioService: CreateUsuario,

        @Inject(UPDATE_USUARIO_PORT)
        private readonly updateUsuariSerivce: UpdateUsuario,

        @Inject(DELETE_USUARIO_PORT)
        private readonly delteUsuarioService: DeleteUsuario
    ) { }


    @Get('buscar')
    @UseInterceptors(CacheInterceptor)
    @CacheKey('get-usuario')
    @CacheTTL(5)
    async get(
        @Query() dto: GetUsuarioDto,
        @Query('page') page: number = 1,
        @Query('pageSize') pageSize: number = 10
    ) {
        return this.getUsuarioService.execute(dto, page, pageSize);
    }
    @Post()
    @UseInterceptors(CacheInterceptor)
    @CacheKey('crate-usuario')
    @CacheTTL(5)
    async create(@Body() dto: CreateUsuarioDto) {
        return this.createUsuarioService.execute(dto);
    }

    @Put(':id_usuario')
    @UseInterceptors(CacheInterceptor)
    @CacheKey('update-usuario')
    @CacheTTL(5)
    async update(
        @Param('id_usuario') id_usuario: number,
        @Body() dto: UpdateUsuarioDto
    ) {
        return this.updateUsuariSerivce.execute(Number(id_usuario), dto);
    }

    async delete(@Param('id_usuario') id_usuario: number): Promise<{ message: string }> {
        await this.delteUsuarioService.execute(Number(id_usuario));
        return { message: "Usuario Eliminado Correctamente" };
    }
}