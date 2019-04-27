import { WebsocketModule } from './websockets/websocket.module';
import { Module } from '@nestjs/common';
import { SalaController } from './sala.controller';
import { SalaService } from './sala.service';
import { SalaSchema } from './schemas/sala.schema';
import { MorganModule } from 'nest-morgan';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports:[
    MorganModule.forRoot(),
    MongooseModule.forFeature([{ name: 'Sala', schema: SalaSchema }]),
   // WebsocketModule
  ],
  controllers: [SalaController],
  providers: [SalaService]
})
export class SalaModule {}
