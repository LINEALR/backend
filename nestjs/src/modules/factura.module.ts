import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infraestructure/prisma/prisma.service';

import { FacturaController } from 'src/adapters/in/http/factura/factura.controller';

import { PrismaFacturaRepositoryi } from 'src/adapters/out/prisma/prisma-factura.repository';

import { GetFacturaService } from 'src/application/factura/get-factura.service';
import { CreateFacturaService } from 'src/application/factura/create-factura.service';
import { UpdateFacturaService } from 'src/application/factura/update-factura.service';
import { DeleteFacturaService } from 'src/application/factura/delete-factura.service';

import { FACTURA_REPOSITORY_PORT } from 'src/ports/out/factura-repository.port';
import { GET_FACTURA_PORT } from 'src/ports/in/factura/get-factura.port';
import { CREATE_FACTURA_PORT } from 'src/ports/in/factura/create-factura.port';
import { UPDATE_FACTURA_PORT } from 'src/ports/in/factura/update-factura.port';
import { DELETE_FACTURA_PORT } from 'src/ports/in/factura/delete-factura.port';

@Module({
    imports: [],
    controllers: [FacturaController],
    providers: [
        PrismaService,
{ provide: FACTURA_REPOSITORY_PORT, useClass: PrismaFacturaRepositoryi},
{ provide: GET_FACTURA_PORT, useClass: GetFacturaService},
{ provide: CREATE_FACTURA_PORT, useClass: CreateFacturaService},
{ provide: UPDATE_FACTURA_PORT, useClass: UpdateFacturaService},
        { provide: DELETE_FACTURA_PORT, useClass: DeleteFacturaService}
    ]
})

export class FacturaModule {}