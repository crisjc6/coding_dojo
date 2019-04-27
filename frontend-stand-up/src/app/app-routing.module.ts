import { SalaFormComponent } from "./componentes/sala-form/sala.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { SalaListComponent } from "./componentes/sala-list/sala-list.component";

const routes: Routes = [
  {
    path: '',
    component: SalaListComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
