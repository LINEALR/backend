import { IsBoolean, IsInt, IsOptional, IsString, Min } from "class-validator";
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

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    page?: number = 1;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    pageSize?: number = 10;
}