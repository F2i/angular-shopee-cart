import { Component } from '@angular/core';
import { CartSummary } from './cart-summary/cart-summary.model';
import { Product } from './product-list/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Ricardo Shopping Cart';
  products: Product[] = [
    {
      id: 'id_00',
      name: 'Banh gio',
      description: 'Description for product item number 1',
      thumbnail: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg',
      price: 6.99,
      quantity: 7
    },
    {
      id: 'id_01',
      name: 'Che dau xanh',
      description: 'Description for product item number 2',
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDeWX6z-X88FvQFo61fyp4K3oIwIwpVDQKp4fPFzUTimnzWlDr7F8BGHhja2qPTaaO8pI&usqp=CAU',
      price: 2.99,
      quantity: 3
    }
  ]

  numberItems: number = this.quantityCal(this.products);

  cartSummary: CartSummary = {
    subtotal: 6.9,
    tax: 5,
    total: this.totalCal(this.products)
  }

  removeProduct(productInfo: any){
    console.log("Removing product with name", productInfo.name);
    const productIndex = this.products.findIndex(product => product.id === productInfo.id)
    this.products.splice(productIndex,1);
    console.log("Removed!")
    this.updateCartHeader();
    this.updateCartSummary();
  }

  updateProductQuantity(eventData: any){
    console.log("Changing product quantity")
    const productIndex = this.products.findIndex(product => product.id === eventData.productInfo.id);
    this.products[productIndex].quantity = Number(eventData.quantityInput.value);
    console.log("Changed!")
    this.updateCartHeader();
    this.updateCartSummary();
  }
  
  updateCartHeader(){
    this.numberItems = this.quantityCal(this.products);
  }
  
  updateCartSummary(){
    this.cartSummary.subtotal = 6.9;
    this.cartSummary.total = this.totalCal(this.products)
  }

  totalCal(productList: Product[]){
    let sum = 0;
    productList.forEach(element => {
      sum += element.quantity * element.price
    });
    return sum;
  }

  quantityCal(productList: Product[]){
    let sum = 0;
    productList.forEach(element => {
      sum += element.quantity
    });
    return sum;
  }
}
