import { Module } from "@nestjs/common";
import { PrismaService } from "src/infraestructure/prisma/postgresql/prisma.service";

import { DispositivosController } from "src/adapters/in/http/dispositivos/dispositivos.controller";

import { PrismaDispositivosRepository } from "src/adapters/out/prisma/prisma-dispositivos.repository";

import { GetDispositivosService } from "src/application/dipositivos/get-dispositivos.service";
import { CreateDispositivosService } from "src/application/dipositivos/create-dispositivos.service";
import { UpdateDispositivosService } from "src/application/dipositivos/update-dispositivos.service";
import { DeleteDispositivosService } from "src/application/dipositivos/delete-dispositivos.service";
import { AsignarDispositivoService } from "src/application/dipositivos/asignar-dispositivo.service";
import { RevocarDispositivoService } from "src/application/dipositivos/revocar-dispositivo.service";
import { AgregarAsignacionService } from "src/application/dipositivos/agregar-asignacion.service";

import { DISPOSITIVOS_REPOSITORY_PORT } from "src/ports/out/dispositivos-repository.port";
import { GET_DISPOSITIVOS_PORT } from "src/ports/in/dipositivos/get-dispositivos.port";
import { CREATE_DISPOSITIVOS_PORT } from "src/ports/in/dipositivos/create-dispositivos.port";
import { UPDATE_DISPOSITIVOS_PORT } from "src/ports/in/dipositivos/update-dispositivos.port";
import { DELETE_DISPOSITIVOS_PORT } from "src/ports/in/dipositivos/delete-dipositivos.port";
import { ASIGNAR_DISPOSITIVO_PORT } from "src/ports/in/dipositivos/asignar-dispositivo.port";
import { REVOCAR_DISPOSITIVO_PORT } from "src/ports/in/dipositivos/revocar-dispositivo.port";
import { AGREGAR_CON_ASIGNACION_PORT } from "src/ports/in/dipositivos/agregar-asignacion.port";
import { FULL_CREATE_DISPOSITIVOS_PORT } from "src/ports/in/dipositivos/full-create-dispositvos.port";

import { ColaboradoresModule } from "./colaboradores.module"
import { FullCreateDispositivosService } from "src/application/dipositivos/full-create-dispositivos.service";
import { FacturaModule } from "./factura.module";

@Module({
    imports: [ColaboradoresModule, FacturaModule],
    controllers: [DispositivosController],
    providers: [
        PrismaService,
        { provide: DISPOSITIVOS_REPOSITORY_PORT, useClass: PrismaDispositivosRepository },
        { provide: GET_DISPOSITIVOS_PORT, useClass: GetDispositivosService },
        { provide: CREATE_DISPOSITIVOS_PORT, useClass: CreateDispositivosService} ,
        { provide: UPDATE_DISPOSITIVOS_PORT, useClass: UpdateDispositivosService },
        { provide: DELETE_DISPOSITIVOS_PORT, useClass: DeleteDispositivosService },
        { provide: ASIGNAR_DISPOSITIVO_PORT, useClass: AsignarDispositivoService },
        { provide: REVOCAR_DISPOSITIVO_PORT, useClass: RevocarDispositivoService},
        { provide: AGREGAR_CON_ASIGNACION_PORT, useClass: AgregarAsignacionService},
        { provide: FULL_CREATE_DISPOSITIVOS_PORT, useClass: FullCreateDispositivosService}
    ],
})

export class DispositivosModule {}