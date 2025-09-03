import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateUbicacionFisicaDto {
    @IsInt()
    @IsNotEmpty()
    codigo_ubicacion: number;

    @IsString()
    @IsNotEmpty()
    descripcion: string;
}