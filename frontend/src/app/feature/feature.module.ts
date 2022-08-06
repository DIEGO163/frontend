import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FeatureRoutingModule } from "./feature-routing.module";
import { FeriadosFormComponent } from "./feriados/feriados-form/feriados-form.component";
import { RolFormComponent } from './rol/rol-form/rol-form.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import { FeriadosListComponent } from './feriados/feriados-list/feriados-list.component';
import { FeriadosToolbarComponent } from './feriados/feriados-toolbar/feriados-toolbar.component';
import { CategoriaSearchComponent } from './categoria/categoria-search/categoria-search.component';
import { RolComboboxComponent } from './rol/rol-combobox/rol-combobox.component';



@NgModule({
    declarations: [
        FeriadosFormComponent,
        RolFormComponent,
        CategoriaFormComponent,
        FeriadosListComponent,
        FeriadosToolbarComponent,
        CategoriaSearchComponent,
        RolComboboxComponent,

  ],
    imports: [
      CommonModule,
      FeatureRoutingModule,
      FormsModule,
    ]
  })
  export class FeatureModule { }