import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AreaSistemasModule } from './modules/area-sistemas.module';
import { ArticuloSistemas } from './domain/articulo-sistemas/articulo-sistemas.entity';
import { ColaboradoresModule } from './modules/colaboradores.module';
import { DispositivosModule } from './modules/dispositivos.module';
import { FacturaModule } from './modules/factura.module';
import { HistorialArticuloModule } from './modules/historial-articulo.module';
import { UsuarioModule } from './modules/usuario.module';

@Module({
  imports: [
    CacheModule.register({
      isGlobal : true,
      ttl: 5,
    }),
    ColaboradoresModule,
    DispositivosModule,
    AreaSistemasModule,
    ArticuloSistemas,
    FacturaModule,
    HistorialArticuloModule,
    UsuarioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}