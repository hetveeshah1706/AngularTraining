import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-demo-child',
  // templateUrl: './demo-child.component.html',
  template:`
    <h1>{{message}}</h1>
  `,
  styleUrls: ['./demo-child.component.css']
})
export class DemoChildComponent implements OnInit {

  constructor() { }
  @Input() message:string;
  ngOnInit(): void {
  }

}
