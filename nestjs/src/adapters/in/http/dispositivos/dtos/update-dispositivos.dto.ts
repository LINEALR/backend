import { IsInt, IsOptional, IsString } from "class-validator";

export class UpdateDispositivosDto {
    
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
    @IsInt()
    num_serie: string;

    @IsOptional()
    @IsString()
    id_visual: string;

    @IsOptional()
    @IsInt()
    num_sap: number;

    @IsOptional()
    @IsString()
    status: string;

    @IsOptional()
    @IsString()
    extras: string;

    @IsOptional()
    @IsInt()
    id_area: number;

    @IsOptional()
    @IsInt()
    num_control: number;

    @IsOptional()
    @IsInt()
    codigo_propietario: number;

    @IsOptional()
    @IsInt()
    codigo_ubicacion: number;

    @IsOptional()
    @IsInt()
    id_factura: number;
}