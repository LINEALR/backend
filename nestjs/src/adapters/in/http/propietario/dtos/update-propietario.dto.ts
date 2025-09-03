import { IsInt, IsOptional, IsString } from "class-validator";

export class UpdatePropietarioDto {
    @IsOptional()
    @IsInt()
    codigo_popietario: number;

    @IsOptional()
    @IsString()
    nombre: string;
}