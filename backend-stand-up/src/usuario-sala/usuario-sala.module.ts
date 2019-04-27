import { Module } from '@nestjs/common';
import { UsuarioSalaController } from './usuario-sala.controller';
import { UsuarioSalaService } from './usuario-sala.service';

@Module({
  controllers: [UsuarioSalaController],
  providers: [UsuarioSalaService]
})
export class UsuarioSalaModule {}
