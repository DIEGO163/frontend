import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FeatureRoutingModule } from "./feature-routing.module";
import { FeriadosFormComponent } from "./feriados/feriados-form/feriados-form.component";
import { RolFormComponent } from './rol/rol-form/rol-form.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';



@NgModule({
    declarations: [
        FeriadosFormComponent,
        RolFormComponent,
        CategoriaFormComponent,

  ],
    imports: [
      CommonModule,
      FeatureRoutingModule,
      FormsModule,
    ]
  })
  export class FeatureModule { }