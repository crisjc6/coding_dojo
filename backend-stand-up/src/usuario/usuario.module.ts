import { UsuarioService } from './usuario.service';
import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { databaseProviders } from './base-datos.providers';
import { UsuarioProvider } from './usuario.providers';

@Module({
  controllers: [UsuarioController],
  providers:[UsuarioService, ...databaseProviders,...UsuarioProvider]
})
export class UsuarioModule {}
