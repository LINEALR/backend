import { IsInt, IsOptional, IsString, Max, Min } from "class-validator";
import { Type } from "class-transformer";

export class GetAreasSistemasDto {

    @IsOptional()
    @IsString()
    ceco_sap?: string;

    @IsOptional()
    @IsString()
    descripcion_ceco?: string;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    area_sistemas?: number;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    page?: number = 1;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    @Max(15)
    pageSize?: number = 10;
}