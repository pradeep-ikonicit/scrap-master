import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
// import { AddProductComponent } from '../add-product/add-product.component';
import { ProductsComponent } from './products.component';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule {
}
