import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDemoComponent } from './product-demo/product-demo.component';
import { ProductComponent } from './product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { routingProductArr } from './product.routing';
@NgModule({
  declarations: [ProductDemoComponent, ProductComponent, AddProductComponent],
  imports: [
    CommonModule,
    FormsModule,
    routingProductArr
  ],
  // exports:[ ProductDemoComponent]
})
export class ProductModule { }
