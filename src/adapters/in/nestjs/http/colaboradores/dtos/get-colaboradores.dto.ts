import { IsInt, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

export class GetColaboradoresDto {
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    num_control?: number;

    @IsOptional()
    @IsString()
    nombre?: string;

    @IsOptional()
    @IsString()
    correo?: string;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    id_area?: number;
} 