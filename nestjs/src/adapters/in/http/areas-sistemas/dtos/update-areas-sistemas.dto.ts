import { IsInt, IsOptional, IsString } from "class-validator";

export class UpdateAreasSistemasDto {
    @IsOptional()
    @IsString()
    ceco_sap?: string;


    @IsOptional()
    @IsString()
    descripcion_ceco?: string;

    @IsString()
    area_sistemas?: string;
}