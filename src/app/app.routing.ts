import { Router, RouterModule, Routes } from '@angular/router';
import { ComponentProductComponent } from './component-product/component-product.component';
import { BindingDemoComponent } from './binding-demo/binding-demo.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { UserGuardService } from './user-guard.service';
import { ProductComponent } from './product/product.component';
import { ProductDemoComponent } from './product/product-demo/product-demo.component';
// { path: ‘employee’, loadChildren: ‘./employee/employee.module#EmployeeModule’}
const arr: Routes = [
  { path: '', component: LoginComponent },
  { path: 'nav',component:NavBarComponent},
  { path: 'home', component: HomeComponent },
  {path:'product_display',loadChildren:'./product/product.module#ProductModule'},
//   { path: 'product',canActivate:[UserGuardService],
//   children:[
//     {path:'',component:ComponentProductComponent},
//     {path:'editProduct/:pid',component:EditProductComponent},
//   ]
//  },
   { path: 'bindingDemo', component: BindingDemoComponent },
  { path: '**', component: PageNotFoundComponent },


];
export const routing = RouterModule.forRoot(arr);
