import { Component } from '@angular/core';
import { Product, products } from '../products';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  items = this.cartService.getItems();

  constructor (
    private cartService: CartService
  ) {}
  
  clearCart(){
    this.items = this.cartService.clearCart();
  }
}
