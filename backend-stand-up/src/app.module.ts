import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from 'usuario/usuario.module';
import { SalaModule } from './sala/sala.module';
import { UsuarioSalaModule } from './usuario-sala/usuario-sala.module';

@Module({
  imports: [UsuarioModule, SalaModule, UsuarioSalaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
