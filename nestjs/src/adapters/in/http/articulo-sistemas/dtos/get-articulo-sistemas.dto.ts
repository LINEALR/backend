import { IsInt, IsString, IsOptional } from "class-validator";
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

}