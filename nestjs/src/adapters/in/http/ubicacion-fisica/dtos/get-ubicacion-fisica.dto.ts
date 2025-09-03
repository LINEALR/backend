import { IsInt, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

export class GetUbicacionFisicaDto {
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    codigo_ubicacion: number;

    @IsOptional()
    @IsString()
    descripcion: string;
}