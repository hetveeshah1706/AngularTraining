import { Component, OnInit, ViewChild } from '@angular/core';
import { DemoChildComponent } from '../demo-child/demo-child.component';

@Component({
  selector: 'app-demo-parent',
  // templateUrl: './demo-parent.component.html',
  template:`
    <div>
  <h1>Messages</h1>
  <!-- <app-demo-child [message]='message'></app-demo-child> -->
  </div>
  `,
  styleUrls: ['./demo-parent.component.css']
})
export class DemoParentComponent implements OnInit {
  message:any
  // @ViewChild(DemoChildComponent) msg:DemoChildComponent
  constructor() { }

  ngOnInit(): void {
    this.message="hello world"
  }

}
