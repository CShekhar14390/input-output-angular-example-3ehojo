import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
  @Input() name: string;
  @Input() parentName: string;
  @Input() parentCount: number;
  moneydetails = 0;
  @Output() valueChange = new EventEmitter<any>();
  money = 0;
  counter = 10;
  msg3: string = '';
  constructor() {}

  ngOnInit() {
    //this.valueChange.subscribe(v => {
    //  this.moneydetails += v}
    //);
  }

  valueChanged() {
    //this.counter += 1;
    console.log(this.valueChange.emit({ no: 3, count: this.counter }));
  }
}
