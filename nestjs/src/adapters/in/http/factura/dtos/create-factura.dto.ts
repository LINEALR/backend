import { IsInt, IsNotEmpty, IsString, IsDate } from "class-validator";

export class CreateFacturaDto {
    @IsInt()
    @IsNotEmpty()
    codigo_propietario: number;

    @IsString()
    @IsNotEmpty()
    proveedor_alias: string;

    @IsString()
    @IsNotEmpty()
    razon_social: string;

    @IsString()
    @IsNotEmpty()
    folio_factura: string;

    @IsString()
    @IsNotEmpty()
    fact_so: string;

    @IsDate()
    @IsNotEmpty()
    fecha_factura: Date;

    @IsString()
    @IsNotEmpty()
    moneda: string;

    @IsInt()
    @IsNotEmpty()
    unit_s_iva: number;
}