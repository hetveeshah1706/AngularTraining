import { Routes, RouterModule } from '@angular/router';
import { ProductDemoComponent } from './product-demo/product-demo.component';
import { AddProductComponent } from './add-product/add-product.component';


const arr: Routes = [
  { path: '', component: ProductDemoComponent },
  { path: 'addProduct', component: AddProductComponent }
];

export const routingProductArr = RouterModule.forChild(arr);
