import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { setearMensajes, mensajesValidacionCorreo, mensajesValidacionLetras, validacionCorreo } from 'validaciones';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup;

  mensajesErrorCorreo: string[]=[];
  mensajesErrorPassword: string[]=[];

  constructor(private readonly _autenticacionService:AutenticacionService,
  private readonly _formBuilder: FormBuilder,
  private router: Router) { }

  ngOnInit() {
    this.formularioLogin =this._formBuilder.group({
      correo:[
        '',
        validacionCorreo
      ],
      password:[
        '',
        Validators.required
      ]
    })

    this.formularioLogin.valueChanges
    .subscribe(()=>{
      this.mensajesErrorCorreo= setearMensajes(this.formularioLogin.get('correo'), mensajesValidacionCorreo);
      this.mensajesErrorPassword= setearMensajes(this.formularioLogin.get('password'), mensajesValidacionLetras);
    })
  }

  logear(){
/*     this._autenticacionService.login(
      this.formularioLogin.get('correo').value,
      this.formularioLogin.get('password')
    ); */
    this.router.navigate(["/sala/crear"]);
  }

}
