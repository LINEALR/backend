import { IsInt, IsOptional, IsString, IsDate } from "class-validator";

export class UpdateHistorialArticuloDto {
    @IsOptional()
    @IsInt()
    id_usuario: number;

    @IsOptional()
    @IsDate()
    fecha_modificacion: Date;

    @IsOptional()
    @IsInt()
    id_dispositivos: number;

    @IsOptional()
    @IsString()
    hostname: string;

    @IsOptional()
    @IsString()
    ceco_sap_ant: string;

    @IsOptional()
    @IsInt()
    num_conrol_ant: number;
    
    @IsOptional()
    @IsInt()
    id_movimiento: number;
}