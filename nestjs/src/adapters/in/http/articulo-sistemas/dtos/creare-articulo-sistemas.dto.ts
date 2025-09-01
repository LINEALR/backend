import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateArticuloSistemasDto {
    @IsInt()
    @IsNotEmpty()
    codigo_articulo: number;

    @IsString()
    descripcion: string;

    @IsString()
    @IsNotEmpty()
    identificador: string;

    @IsInt()
    @IsNotEmpty()
    consecutivo: number;
}