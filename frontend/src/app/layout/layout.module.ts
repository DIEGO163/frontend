import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LayoutRoutingModule } from "./layout-routing.module";
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { DesboardComponent } from './desboard/desboard.component';

@NgModule({
    declarations: [

    
    SidebarComponent,
           MainComponent,
           HeaderComponent,
           DesboardComponent
  ],
    imports: [
      CommonModule,
      LayoutRoutingModule
    ]
  })
  export class LayoutModule { }