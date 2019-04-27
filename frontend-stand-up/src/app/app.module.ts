import { LoginComponent } from './componentes/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './componentes/usuario-listar/usuario.component';
import { SalaFormComponent } from './componentes/sala-form/sala.component';
import { SalaListComponent } from './componentes/sala-list/sala-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SalaService } from './services/sala.service';
import { AutenticacionService } from './services/autenticacion.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioComponent,
    SalaFormComponent,
    SalaListComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [SalaService,
    AutenticacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
