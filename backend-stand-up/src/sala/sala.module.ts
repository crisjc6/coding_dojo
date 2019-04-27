import { databaseProviders } from './../usuario/base-datos.providers';

import { Module } from '@nestjs/common';
import { SalaController } from './sala.controller';
import { SalaService } from './sala.service';
import { SalaProvider } from './sala.provider';

@Module({
  controllers: [SalaController],
  providers: [SalaService,...databaseProviders,...SalaProvider]
})
export class SalaModule {}
