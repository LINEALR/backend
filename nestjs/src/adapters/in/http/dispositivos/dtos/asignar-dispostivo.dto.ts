import { IsInt, IsNotEmpty } from "class-validator";

export class AsignarDispositivoDto {
    @IsInt()
    @IsNotEmpty()
    id_dispositivos: number;

    @IsInt()
    @IsNotEmpty()
    num_control: number;
}