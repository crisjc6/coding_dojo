import { SalaModule } from './../sala.module';
import { SalaGateway } from './sala/sala.gateway';
import { Module } from "@nestjs/common";

@Module({
    providers:[SalaGateway],
    exports:[SalaGateway]
})
export class WebsocketModule{

}