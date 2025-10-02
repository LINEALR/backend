import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateAreasSistemasDto {
        @IsString()
        @IsNotEmpty()
        ceco_sap: string;

        @IsString()
        descripcion_ceco: string;

        @IsString()
        @IsNotEmpty()
        area_sistemas: string;
}