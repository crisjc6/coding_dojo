import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable()
export class AutenticacionService {

  constructor(private readonly _httpClient:HttpClient,
              private readonly _router:Router){}

  estaLogeado= false;
  usuarioLogeado: any;

  login(correo, password){
    this._httpClient.post(environment.url+'/autentificacion',
      {
        correo,
        password
      })
      .subscribe((usuario)=>{
        console.log(usuario);
        this.estaLogeado= true;
        this.usuarioLogeado= usuario;
        this._router.navigate(['sala']);
      },(error1)=>{
        console.error(error1);
      })
  }

  estadoLogin(){
    return this.estaLogeado;
  }

  obtenerRolUsuario(){
   return this.usuarioLogeado.rol;
  }
}
