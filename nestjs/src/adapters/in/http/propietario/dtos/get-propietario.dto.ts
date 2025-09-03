import { IsInt, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

export class GetPropietarioDto {
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    codigo_popietario: number;

    @IsOptional()
    @IsString()
    nombre: string;
}