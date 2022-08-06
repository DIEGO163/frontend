import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeriadosFormComponent } from "../feature/feriados/feriados-form/feriados-form.component";
import { MainComponent } from "./main/main.component";

const routes: Routes = [
    {path: '', component:MainComponent ,
    children: [
      {path: 'feriados-form', component:FeriadosFormComponent},
    ]
  }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LayoutRoutingModule { }