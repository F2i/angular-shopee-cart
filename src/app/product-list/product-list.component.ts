import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = [
    {
      name: 'Banh gio',
      description: 'Description for product item number 1',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 6.99,
      quantity: 7
    },
    {
      name: 'Che dau xanh',
      description: 'Description for product item number 2',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 2.99,
      quantity: 3
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
