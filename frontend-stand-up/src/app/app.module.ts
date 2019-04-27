import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './componentes/usuario-listar/usuario.component';
import { SalaFormComponent } from './componentes/sala-form/sala.component';
import { SalaListComponent } from './componentes/sala-list/sala-list.component';
@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    SalaFormComponent,
    SalaListComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
