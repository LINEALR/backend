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

    @IsOptional()
    @IsString()
    folio_factura: string;
}