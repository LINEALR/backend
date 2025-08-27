import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateColaboradoresDto {
    @IsInt()
    @IsNotEmpty()
    num_control: number;
    
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    correo: string;

    @IsInt()
    id_area: number;
}