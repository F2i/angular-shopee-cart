import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] = [];
  @Output() onRemoveProduct = new EventEmitter();
  @Output() onQuantityChange = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  removeProduct(productInfo: any){
    this.onRemoveProduct.emit(productInfo)
  }

  quantityChange(quantityInput: HTMLInputElement, productInfo: any){
    this.onQuantityChange.emit({
        quantityInput: quantityInput,
        productInfo: productInfo
      }
    )
  }

}
