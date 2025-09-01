import { IsInt, IsOptional, IsString, IsDate } from "class-validator";

export class UpdateFacturaDto {
    @IsOptional()
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
    @IsDate()
    fecha_factura: Date;

    @IsOptional()
    @IsString()
    moneda: string;

    @IsOptional()
    @IsInt()
    unit_s_iva: number;
}