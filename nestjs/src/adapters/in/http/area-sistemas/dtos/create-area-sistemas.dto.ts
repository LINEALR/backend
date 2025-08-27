import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateAreaSistemasDto {
        @IsString()
        @IsNotEmpty()
        ceco_sap: string;

        @IsString()
        descripcion_ceco: string;

        @IsInt()
        @IsNotEmpty()
        area_sistemas: number;
}