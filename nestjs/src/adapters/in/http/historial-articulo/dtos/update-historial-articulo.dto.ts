import { IsInt, IsOptional, IsString, IsDate } from "class-validator";

export class UpdateHistorialArticuloDto {
    @IsOptional()
    @IsInt()
    id_colaborador: number;

    @IsOptional()
    @IsInt()
    id_usuario: number;

    @IsOptional()
    @IsInt()
    id_dispositivos: number;

    @IsOptional()
    @IsInt()
    id_movimiento: number;

    @IsOptional()
    @IsDate()
    fecha_modificacion: Date;
}