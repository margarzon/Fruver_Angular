import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MenuNavComponent } from '../menu-nav/menu-nav.component';
import { BodyWebComponent } from '../body-web/body-web.component';



@NgModule({
  declarations: [
    HomeComponent,
    MenuNavComponent,
    BodyWebComponent
  ],
  exports:[
    HomeComponent,
    MenuNavComponent,
    BodyWebComponent
  ],
  imports:[
    CommonModule
  ]
})
export class HomeModule { }
