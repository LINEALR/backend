import { IsInt, IsOptional, IsString } from "class-validator";

export class UpdateAreaSistemasDto {
    @IsOptional()
    @IsString()
    ceco_sap?: string;


    @IsOptional()
    @IsString()
    descripcion_ceco?: string;


    @IsOptional()
    @IsInt()
    area_sistemas?: number;
}