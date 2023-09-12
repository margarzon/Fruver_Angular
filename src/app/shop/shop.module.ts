import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { MenuNavComponent } from '../menu-nav/menu-nav.component';
import { BodyWebComponent } from '../body-web/body-web.component';



@NgModule({
  declarations: [
    ShopComponent,
    MenuNavComponent,
    BodyWebComponent,
  ],
  exports:[
    ShopComponent,
    MenuNavComponent,
    BodyWebComponent,
  ],
  imports:[
    CommonModule
  ]
})
export class ShopModule { }
