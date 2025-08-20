import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColaboradoresModule } from './modules/nestjs/colaboradores.module';

@Module({
  imports: [
    CacheModule.register({
      isGlobal : true,
      ttl: 5,
    }),
    ColaboradoresModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
