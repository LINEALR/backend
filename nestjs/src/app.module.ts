import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AreasSistemasModule } from './modules/areas-sistemas.module';
import { ArticuloSistemas } from './domain/entities/articulo-sistemas/articulo-sistemas.entity';
import { ColaboradoresModule } from './modules/colaboradores.module';
import { DispositivosModule } from './modules/dispositivos.module';
import { FacturaModule } from './modules/factura.module';
import { HistorialArticuloModule } from './modules/historial-articulo.module';
import { PropietarioModule } from './modules/propietario.module';
import { UbicacionFisicaModule } from './modules/ubicacion-fisica.module';
import { UsuarioModule } from './modules/usuario.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CacheModule.register({
      isGlobal: true,
      ttl: 5,
    }),
    ColaboradoresModule,
    DispositivosModule,
    AreasSistemasModule,
    ArticuloSistemas,
    FacturaModule,
    HistorialArticuloModule,
    PropietarioModule,
    UbicacionFisicaModule,
    UsuarioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }