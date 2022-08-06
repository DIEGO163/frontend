import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FeatureRoutingModule } from "./feature-routing.module";
import { FeriadosFormComponent } from "./feriados/feriados-form/feriados-form.component";


@NgModule({
    declarations: [
        FeriadosFormComponent
  ],
    imports: [
      CommonModule,
      FeatureRoutingModule,
      FormsModule,
    ]
  })
  export class FeatureModule { }