import { IsInt, IsNotEmpty, IsString, IsBoolean } from "class-validator";

export class CreateUsuarioDto {
    @IsInt()
    @IsNotEmpty()
    num_control: number;

    @IsInt()
    @IsNotEmpty()
    id_rol: number;

    @IsString()
    @IsNotEmpty()
    contrasena: string;

    @IsBoolean()
    @IsNotEmpty()
    status: boolean;
}