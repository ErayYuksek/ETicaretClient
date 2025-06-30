import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild([
    {path:"",component:ProductsComponent}
    ])  // ✅ Bu burada olmalı
  ]
})

export class ProductsModule { }
