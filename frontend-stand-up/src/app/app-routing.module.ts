import { SalaFormComponent } from "./componentes/sala-form/sala.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { SalaListComponent } from "./componentes/sala-list/sala-list.component";
import { LoginComponent } from "./componentes/login/login.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'sala',
    component: SalaListComponent
  },
  {
    path: 'sala/crear',
    component: SalaFormComponent
  },
  {
    path: 'sala/editar/:id',
    component: SalaFormComponent
  },
  {
    path:'',
    redirectTo:'',
    pathMatch:'full'
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
