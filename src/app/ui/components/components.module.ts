import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { HomeModule } from './home/home.module';
import { BasketsModule } from './baskets/baskets.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,ProductsModule,HomeModule,BasketsModule
  ],
  exports: [ // 👈 bu kısmı ekle ki dışa çıksın!
    ProductsModule,
    HomeModule,
    BasketsModule
  ]
})
export class ComponentsModule { }
