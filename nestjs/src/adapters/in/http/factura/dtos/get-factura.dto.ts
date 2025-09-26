import { IsInt, IsOptional, IsString, Min } from "class-validator";
import { Type } from "class-transformer";

export class GetFacturaDto {
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    codigo_propietario: number;

    @IsOptional()
    @IsString()
    proveedor_alias: string;

    @IsOptional()
    @IsString()
    razon_social: string;

    @IsOptional()
    @IsString()
    folio_factura: string;

    @IsOptional()
    @IsString()
    fact_so: string;

    @IsOptional()
    @Type(() => Date)
    fecha_factura: Date;

    @IsOptional()
    @IsString()
    moneda: string;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    unit_s_iva: number;
    
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