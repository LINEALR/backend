import { IsInt, IsNotEmpty, IsString, IsDate } from "class-validator";

export class CreateHistorialArticuloDto {
    @IsInt()
    @IsNotEmpty()
    id_usuario: number;

    @IsDate()
    @IsNotEmpty()
    fecha_modificacion: Date;

    @IsInt()
    @IsNotEmpty()
    id_dispositivos: number;

    @IsString()
    @IsNotEmpty()
    hostname: string;

    @IsString()
    @IsNotEmpty()
    ceco_sap_ant: string;

    @IsInt()
    @IsNotEmpty()
    num_conrol_ant: number;
    
    @IsInt()
    @IsNotEmpty()
    id_moimiento: number;
}