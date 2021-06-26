import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/products';
import { ProductCar } from '../interface/CartProduct';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import { PRODUCTS } from '../data/mock-products';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  products = PRODUCTS;
  cart:ProductCar[] = [];
  total: number = 0;
  totalProducts: number = 0;

  constructor(private router:Router,
              private cartService:CartService) {}

  ngOnInit(): void {
    this.cart =this.cartService.cart;
    this.getTotal();
  }


  addCart(product:Product){
    this.cartService.addNew(product);
    this.cart = this.cartService.getCart();
  }

  deleteCart(product:Product){
    this.cartService.deleteNew(product);
    this.cart = this.cartService.getCart();
  }

  btnClickBack(){
    this.router.navigateByUrl('/shop')
  }

  getTotal(){
    this.cartService.total$.subscribe((newTotal) => (this.total = newTotal));
    this.cartService.carritoLength$.subscribe(
      (carrLength) => (this.totalProducts = carrLength)
    );
  }



}
