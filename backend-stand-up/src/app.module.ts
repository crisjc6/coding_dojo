import { WebsocketModule } from './sala/websockets/websocket.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from 'usuario/usuario.module';
import { SalaModule } from './sala/sala.module';
import { UsuarioSalaModule } from './usuario-sala/usuario-sala.module';
import { MongooseModule } from "@nestjs/mongoose";
@Module({
  imports: [ MongooseModule.forRoot('mongodb://localhost:32770/mongo', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  }),UsuarioModule, UsuarioSalaModule, 
  //WebsocketModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
