import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

  expression: string = '';
  setNullExp: boolean;
  specialValues = ['+', '-', '/', '*'];

  constructor() { }

  ngOnInit() {
  }

  onDigitClick(exp: string) {
    if (this.setNullExp && exp === '=') {
      return;
    }

    if(this.setNullExp && this.specialValues.indexOf(exp) === -1) { // If value already calculated then set null
      this.expression = '';
    }

    if (exp === '=') {
      this.expression = eval(this.expression);
      this.setNullExp = true;
      return;
    }

    this.setNullExp = false;
    this.expression = this.expression + exp;
  }
}
