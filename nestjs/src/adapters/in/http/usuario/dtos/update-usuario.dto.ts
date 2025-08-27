import { IsBoolean,  IsInt, IsOptional, IsString } from "class-validator";

export class UpdateUsuarioDto {
    @IsOptional()
    @IsInt()
    num_control?: number;

    @IsOptional()
    @IsInt()
    id_rol?: number;

    @IsOptional()
    @IsString()
    contrasena?: string;

    @IsBoolean()
    status: boolean;
}