import { IsInt, IsOptional, IsString, Min } from "class-validator";
import { Type } from "class-transformer";

export class GetPropietarioDto {
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    codigo_popietario: number;

    @IsOptional()
    @IsString()
    nombre: string;
    
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