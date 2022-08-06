import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriaFormComponent } from "../feature/categoria/categoria-form/categoria-form.component";
import { FeriadosFormComponent } from "../feature/feriados/feriados-form/feriados-form.component";
import { FeriadosListComponent } from "../feature/feriados/feriados-list/feriados-list.component";
import { RolFormComponent } from "../feature/rol/rol-form/rol-form.component";
import { MainComponent } from "./main/main.component";

const routes: Routes = [
    {path: '', component:MainComponent ,
    children: [
      {path: 'feriados-form', component:FeriadosFormComponent},
      {path: 'feriados-list', component:FeriadosListComponent},
      {path: 'feriados-form/:id', component:FeriadosFormComponent},
      {path: 'rol-form', component:RolFormComponent},
      {path: 'categoria-form', component:CategoriaFormComponent},
    ]
  }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LayoutRoutingModule { }