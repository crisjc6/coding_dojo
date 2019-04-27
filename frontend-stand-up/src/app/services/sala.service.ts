import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { from } from "rxjs";
import { SalaInterface } from "../interfaces/sala.interface";

@Injectable()
export class SalaService{
    constructor(private readonly _httpClient:HttpClient){
    }

    obtenerTodos(){
        return this._httpClient.get(environment.url+'/sala/')
    }

    obtenerUno(id:string){
        return from(this._httpClient.get(environment.url+'/sala/'+id))
    }
    crear(sala:SalaInterface){
        return this._httpClient.post(environment.url + '/sala/crear',
          sala);
      }
    editar(id:string,sala:SalaInterface){
      return this._httpClient.post(environment.url +'/sala/'+id,sala)
    }


}
