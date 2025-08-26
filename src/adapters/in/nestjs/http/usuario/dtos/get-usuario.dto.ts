import { IsBoolean, IsInt, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

export class GetUsuarioDto {
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    num_control?: number;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    id_rol?: number;

    @IsOptional()
    @IsString()
    contrasena?: string;

    @IsOptional()
    @IsBoolean()
    status?: boolean;
}