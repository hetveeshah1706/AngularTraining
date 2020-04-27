import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { DemoParentComponent } from './demo-parent/demo-parent.component';
import { BindingDemoComponent } from './binding-demo/binding-demo.component';
import { ElementRefdemoComponent } from './element-refdemo/element-refdemo.component';
import { ProductModule } from './product/product.module';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { ComponentProductComponent } from './component-product/component-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HearderComponentComponent } from './hearder-component/hearder-component.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ParentDemoComponent } from './parent-demo/parent-demo.component';
import { ChildDemoComponent } from './child-demo/child-demo.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    DemoParentComponent,
    BindingDemoComponent,
    ElementRefdemoComponent,
    LoginComponent,
    ComponentProductComponent,
    NavBarComponent,
    HearderComponentComponent,
    HomeComponent,
    PageNotFoundComponent,
    EditProductComponent,
    ParentDemoComponent,
    ChildDemoComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // ProductModule, //feature module
    routing,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
