// src/adapters/in/http/dispositivos/dto/full-create-dispositivos.dto.ts
import { IsObject, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CreateDispositivosDto } from "./create-dispositivos.dto";
import { CreateFacturaDto } from "../../factura/dtos/create-factura.dto";

export class FullCreateDispositivosDto {
  @IsObject()
  @ValidateNested()
  @Type(() => CreateDispositivosDto)
  dispositivos: CreateDispositivosDto;

  @IsObject()
  @ValidateNested()
  @Type(() => CreateFacturaDto)
  factura: CreateFacturaDto;
}
