import { SalaService } from './../../sala.service';
import { WebSocketGateway, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WsResponse } from "@nestjs/websockets";
import { Observable, from } from "rxjs";
import { SalaInterface } from 'sala/interfaces/sala.interface';
import { CrearSalaDto } from 'sala/dto/sala.dto';
@WebSocketGateway(3002, { namespace: '/sala' })
export class SalaGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    constructor(
        private readonly _salaService: SalaService
    ) { }
    afterInit(server: any) {//listo para escuhcar
        console.log('Init sala-escucha');

    }
    handleConnection(client: any, ...args: any[]) {
        console.log('conectado', client.id, args);
    }
    handleDisconnect(client: any) {
        console.log('se desconecto:', client.id);
    }
/* 
    @SubscribeMessage('obterTodasSalas')
    obtenerTodos(client, data): Observable<SalaInterface[]> {
        console.log('Entro a pisos gateway', client.id);
        console.log('data al servicio',data);
       const listar ;
        return from(listar);
    }


    @SubscribeMessage('obtenerUno')
    obtenerUno(client, data): Observable<SalaInterface> {
        console.log('Entro a piso gateway', client.id);
        console.log('id al servicio',data);
       // const traerUno=this._pisoService.obtenerUno(data.id)
       // return from(traerUno);
    }
    @SubscribeMessage('crear')
    crear(client,data):Observable<CrearSalaDto>{
        console.log('Entro a crer pisos gateway',client.id);
        console.log('data',data);
      //  const crearPiso=this._pisoService.crear(data.piso)
      //  return from(crearPiso)
    }
    @SubscribeMessage('eliminar')
    eliminar(client,data):Observable<any>{
        console.log('Entro a eliminar piso gateway',client.id);
        console.log('data',data);
      //  const eliminarPiso=this._pisoService.eliminar(data.id)
     //   return from(eliminarPiso)

    }
 */
}