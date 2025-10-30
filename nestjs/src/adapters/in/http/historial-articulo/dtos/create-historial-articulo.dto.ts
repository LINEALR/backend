import { IsInt, IsNotEmpty, IsString, IsDate } from "class-validator";

export class CreateHistorialArticuloDto {
    @IsInt()
    @IsNotEmpty()
    num_control: number;
    
    @IsInt()
    @IsNotEmpty()
    id_usuario: number;

    @IsInt()
    @IsNotEmpty()
    id_dispositivos: number;

    @IsString()
    @IsNotEmpty()
    movimiento: string;

    @IsDate()
    @IsNotEmpty()
    fecha_modificacion: Date;
}