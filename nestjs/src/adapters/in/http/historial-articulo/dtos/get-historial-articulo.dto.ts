import { IsInt, IsOptional, IsString, IsDate, Min } from "class-validator";
import { Type } from "class-transformer";

export class GetHistorialArticuloDto {
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    id_colaboradores: number;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    id_usuario: number;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    id_dispositivos: number;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    id_movimiento: number;

    @IsOptional()
    @Type(() => Date)
    @IsInt()
    fecha_modificacion: Date;

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