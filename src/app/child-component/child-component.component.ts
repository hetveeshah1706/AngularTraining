import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
@Output() clicked=new EventEmitter<string>();
onClick(searchTerm:string){
  this.clicked.emit(searchTerm);
  }
  constructor() { }

  ngOnInit(): void {
  }


}





// @Input() result:string="";

