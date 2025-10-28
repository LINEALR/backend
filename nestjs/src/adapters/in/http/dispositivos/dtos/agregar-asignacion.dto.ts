import { IsInt, IsNotEmpty, IsString } from "class-validator";


export class AgregarAsignacionDto {
        @IsString()
        @IsNotEmpty()
        dispositivo: string;
    
        @IsString()
        descripcion_sistemas: string;
    
        @IsString()
        marca: string;
    
        @IsString()
        modelo: string;

        @IsString()
        @IsNotEmpty()
        num_serie: string;
    
        @IsString()
        id_visual: string;
    
        @IsInt()
        @IsNotEmpty()
        num_sap: number;
    
        @IsInt()
        @IsNotEmpty()
        num_control: number;
}