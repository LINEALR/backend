import { IsInt, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

export class GetDispositivosDto {
    
    @IsOptional()
    @IsString()
    dipsositivo: string;

    @IsOptional()
    @IsString()
    descripcion_sistemas: string;

    @IsOptional()
    @IsString()
    marca: string;

    @IsOptional()
    @IsString()
    modelo: string;

    @IsOptional()
    @Type(() => Number) 
    @IsInt()
    num_serie: string;

    @IsOptional()
    @IsString()
    id_visual: string;

    @IsOptional()
    @Type(() => Number) 
    @IsInt()
    num_sap: number;

    @IsOptional()
    @IsString()
    status: string;

    @IsOptional()
    @IsString()
    extras: string;

    @IsOptional()
    @Type(() => Number) 
    @IsInt()
    id_area: number;

    @IsOptional()
    @Type(() => Number) 
    @IsInt()
    num_control: number;

    @IsOptional()
    @Type(() => Number) 
    @IsInt()
    codigo_propietario: number;

    @IsOptional()
    @Type(() => Number) 
    @IsInt()
    codigo_ubicacion: number;

    @IsOptional()
    @Type(() => Number) 
    @IsInt()
    id_factura: number;
}