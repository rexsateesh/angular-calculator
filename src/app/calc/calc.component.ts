import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

  expression: string = '';
  setNullExp: boolean;

  constructor() { }

  ngOnInit() {
  }

  onDigitClick(exp: string) {
    if(this.setNullExp && (exp !== '-' && exp !== '+' && exp !== '/' && exp !== '*')) { // If value already calculated then set null
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
