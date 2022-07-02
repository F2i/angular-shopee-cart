import { Component, Input, OnInit } from '@angular/core';
import { CartSummary } from './cart-summary.model';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
  @Input() cartSummaryInfo: CartSummary | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  submitCart(){
    console.log("Hello");
  }

}
