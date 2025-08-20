import { IsInt, IsOptional, IsString } from "class-validator";

export class UpdateColaboradoresDto {
    @IsOptional()
    @IsInt()
    num_control?: number;

    @IsOptional()
    @IsString()
    nombre?: string;

    @IsOptional()
    @IsString()
    correo?: string;

    @IsOptional()
    @IsInt()
    id_area?: number;
} 