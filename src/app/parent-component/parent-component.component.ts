import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { product } from './product';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ParentComponentComponent implements OnInit {

  constructor() { }
  value:string="Mobile";
  allProduct:product[]=[
  new product(1,"../../assets/img1.jpg","Oppo",50000,100),
  new product(2,"../../assets/img2.jpg","Samsung",40000,50),
  new product(3,"../../assets/img3.jpg","One Plus",60000,150),
  new product(4,"../../assets/img4.jpg","Sony",70000,200),
];
  ngOnInit(): void {
  }
  onClicked(value:string){
  if(value!=''){
  this.allProduct=this.allProduct.filter(res=>res.pname.startsWith(value));
  }
}


}



