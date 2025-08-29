import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AreaSistemasModule } from './modules/area-sistemas.module';
import { ColaboradoresModule } from './modules/colaboradores.module';
import { DispositivosModule } from './modules/dispositivos.module';
import { UsuarioModule } from './modules/usuario.module';

@Module({
  imports: [
    CacheModule.register({
      isGlobal : true,
      ttl: 5,
    }),
    ColaboradoresModule,
    DispositivosModule,
    UsuarioModule,
    AreaSistemasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}