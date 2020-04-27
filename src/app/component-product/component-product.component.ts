import { Component, OnInit } from '@angular/core';
import { product } from '../parent-component/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component-product',
  templateUrl: './component-product.component.html',
  styleUrls: ['./component-product.component.css']
})
export class ComponentProductComponent implements OnInit {
  allProduct:product[]=[
    new product(1,"../../assets/img1.jpg","Oppo",50000,100),
    new product(2,"../../assets/img2.jpg","Samsung",40000,50),
    new product(3,"../../assets/img3.jpg","One Plus",60000,150),
    new product(4,"../../assets/img4.jpg","Sony",70000,200),
  ];

  constructor(public _route:Router) { }

  ngOnInit(): void {
  }
  onEdit(item){
   this._route.navigate(["/product/editProduct",item.pid])
  }

}
