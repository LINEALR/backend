import { IsInt, IsOptional, IsString, Min } from "class-validator";
import { Type } from "class-transformer";

export class GetUbicacionFisicaDto {
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    codigo_ubicacion: number;

    @IsOptional()
    @IsString()
    descripcion: string;
    
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