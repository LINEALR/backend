import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreatePropietarioDto {
    @IsInt()
    @IsNotEmpty()
    codigo_popietario: number;

    @IsString()
    @IsNotEmpty()
    nombre: string;
}