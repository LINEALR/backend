import { IsInt, IsString, IsOptional, Min } from "class-validator";
import { Type } from "class-transformer";

export class GetArticuloSistemasDto {
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    codigo_articulo: number;

    @IsOptional()
    @IsString()
    descripcion: string;

    @IsOptional()
    @IsString()
    identificador: string;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    consecutivo: number;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    page?: number = 1;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    pageSize?: number = 10;
}