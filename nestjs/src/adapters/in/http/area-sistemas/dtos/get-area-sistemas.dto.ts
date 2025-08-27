import { IsInt, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

export class GetAreaSistemasDto {

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
}