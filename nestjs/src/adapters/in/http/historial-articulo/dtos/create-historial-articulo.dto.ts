import { IsInt, IsNotEmpty, IsString, IsDate } from "class-validator";

export class CreateHistorialArticuloDto {
    @IsInt()
    @IsNotEmpty()
    id_colaborador: number;

    @IsInt()
    @IsNotEmpty()
    id_usuario: number;

    @IsInt()
    @IsNotEmpty()
    id_dispositivos: number;

    @IsInt()
    @IsNotEmpty()
    id_movimiento: number;

    @IsDate()
    @IsNotEmpty()
    fecha_modificacion: Date;
}