import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  template:`
    <button (click)="clickButton()">
        Click Me!!
    </button>
  `,
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  clickButton() {
    let num = 100;
    num++;
    alert(`Value of 'num' is : ${num}`);
  }

}
