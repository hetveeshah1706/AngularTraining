import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  pid:number;
  pimg:string;
  pname:string;
  pprice:number;
  soh:number
  constructor() { }

  ngOnInit(): void {
  }

}
