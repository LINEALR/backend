import { IsInt, IsOptional, IsString, IsDate } from "class-validator";
import { Type } from "class-transformer";

export class GetHistorialArticuloDto {
    @IsOptional()
    @Type(() => Number)
    @IsInt()
        id_usuario: number;
    @IsOptional()
    @Type(() => Date)
    @IsInt()
        fecha_modificacion: Date;
    @IsOptional()
    @Type(() => Number)
    @IsInt()
        id_dispositivos: number;
    @IsOptional()
    @IsString()
        hostname: string;
    @IsOptional()
    @IsString()
        ceco_sap_ant: string;
    @IsOptional()
    @Type(() => Number)
    @IsInt()
        num_conrol_ant: number;
    @IsOptional()
    @Type(() => Number)
    @IsInt()
        id_movimiento: number;
}