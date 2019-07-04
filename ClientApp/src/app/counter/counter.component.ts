import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;
  public fibonacciNumber = 1;
  public nextFibonacciNnumber = 0;
  public click = 1;
  public i;


  public incrementCounter() {
    //this.currentCount = this.currentCount +5;
   
    for ( this.i = 0; this.i < this.click ; this.i++)
    {
      this.currentCount = this.fibonacciNumber;
      this.fibonacciNumber = this.fibonacciNumber + this.nextFibonacciNnumber;
      this.nextFibonacciNnumber = this.fibonacciNumber - this.nextFibonacciNnumber ;
    }
    this.click = this.click++;

  }
}
