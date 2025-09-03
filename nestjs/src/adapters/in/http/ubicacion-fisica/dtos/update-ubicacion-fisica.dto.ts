import { IsInt, IsOptional, IsString } from "class-validator";

export class UpdateUbicacionFisicaDto {
    @IsOptional()
    @IsInt()
    codigo_ubicacion: number;

    @IsOptional()
    @IsString()
    descripcion: string;
}