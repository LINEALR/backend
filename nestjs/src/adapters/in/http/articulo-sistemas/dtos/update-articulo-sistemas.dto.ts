import { IsInt, IsOptional, IsString } from "class-validator";

export class UpdateArticuloSistemasDto {
    @IsOptional()
    @IsInt()
    codigo_articulo: number;

    @IsOptional()
    @IsString()
    descripcion: string;

    @IsOptional()
    @IsString()
    identificador: string;

    @IsOptional()
    @IsInt()
    consecutivo: number;
}