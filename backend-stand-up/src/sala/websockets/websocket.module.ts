import { SalaModule } from './../sala.module';
import { SalaGateway } from './sala/sala.gateway';
import { Module } from "@nestjs/common";

@Module({
    
    imports:[SalaModule],
    providers:[SalaGateway],
})
export class WebsocketModule{

}