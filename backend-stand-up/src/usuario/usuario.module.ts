import { UsuarioSchema } from 'usuario/schemas/usuario.schema';
import { UsuarioService } from './usuario.service';
import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { MongooseModule } from '@nestjs/mongoose';

import { MorganModule } from 'nest-morgan';
@Module({
  imports: [
    MorganModule.forRoot(),
    MongooseModule.forFeature([{ name: 'Usuario', schema: UsuarioSchema }]),
  ],
  providers: [UsuarioService],
  controllers: [UsuarioController]
})
export class UsuarioModule {}
