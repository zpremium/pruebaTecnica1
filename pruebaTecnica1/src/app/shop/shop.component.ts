import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../interface/products';
import { PRODUCTS } from '../data/mock-products';
import { ProductCar } from '../interface/CartProduct';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  products = PRODUCTS;
  cart: ProductCar[] = [];
  totalProducts: number = 0;
  total: number = 0;

  constructor(private route: Router, private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.cart;
    this.getTotal();
  }

  btnClick() {
    this.route.navigateByUrl('/basket');
  }

  addNew(product: Product) {
    this.cartService.addNew(product);
    this.cart = this.cartService.cart;
    console.log(this.cart);
  }

  deleteNew(product: Product): void {
    this.cartService.deleteNew(product);
  }

  getTotal() {
    this.cartService.total$.subscribe((newTotal) => (this.total = newTotal));
    this.cartService.carritoLength$.subscribe(
      (carrLength) => (this.totalProducts = carrLength)
    );
  }
}
