import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() name: string;
  @Input() parentName: string;
  @Input() parentCount: number;
  moneydetails = 0;
  msg: string = '';
  @Output() valueChange = new EventEmitter<any>();
  money = 0;
  counter = 15;
  constructor() {}

  ngOnInit() {
    // this.valueChange.subscribe(v => 
    //   {this.moneydetails += v}
    // );  
  }

  valueChanged() {
    //this.counter += 1;
    this.valueChange.emit({no: 1, count: this.counter});
  }
 
}
