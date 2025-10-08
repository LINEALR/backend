import { IsInt, IsNotEmpty, IsString, IsOptional } from "class-validator";

export class CreateDispositivosDto {
    @IsString()
    @IsNotEmpty()
    dispositivo: string;

    @IsString()
    descripcion_sistemas: string;

    @IsString()
    marca: string;

    @IsString()
    modelo: string;

    @IsString()
    @IsNotEmpty()
    num_serie: string;

    @IsString()
    id_visual: string;

    @IsInt()
    @IsNotEmpty()
    num_sap: number;

    @IsString()
    status: string;

    @IsString()
    extras: string;

    @IsOptional()
    @IsString()
    descripcion_ceco: string;

    @IsOptional()
    @IsInt()
    num_control: number;

    @IsOptional()
    @IsString()
    nombre: string;

    @IsOptional()
    @IsString()
    descripcion: string;

    @IsOptional()
    @IsString()
    folio_factura: string;



































}