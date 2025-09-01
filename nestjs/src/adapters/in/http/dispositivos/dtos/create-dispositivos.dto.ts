import { IsInt, IsNotEmpty, IsString } from "class-validator";

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

    @IsInt()
    id_area: number;

    @IsInt()
    num_control: number;

    @IsInt()
    codigo_propietario: number;

    @IsInt()
    codigo_ubicacion: number;

    @IsInt()
    id_factura: number;
}