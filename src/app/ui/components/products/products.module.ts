import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild([
    {path:"",component:ProductsComponent}
    ]),HttpClientModule // ✅ Bu burada olmalı
  ]
})

export class ProductsModule { }
