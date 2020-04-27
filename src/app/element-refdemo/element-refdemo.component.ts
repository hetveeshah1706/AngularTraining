import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-element-refdemo',
  // templateUrl: './element-refdemo.component.html',
  template:`
    <h1 #h1Style></h1>
  `,
    styleUrls: ['./element-refdemo.component.css']
})
export class ElementRefdemoComponent implements OnInit {
  @ViewChild("h1Style") h1View : ElementRef;
  constructor() { }
  ngOnInit(): void {}
  ngAfterViewInit(){
    this.h1View.nativeElement.innerHTML="Welcome To Angular!!! It Is Demo Of ElementRef!!"
  }

}
