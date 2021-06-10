import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../interface/products';
import { PRODUCTS } from '../data/mock-products';
import { CartProduct } from '../interface/CartProduct';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  products = PRODUCTS;
  product: Product[] = [];
  cart: CartProduct[] = [];

  constructor(private route: Router) {}

  ngOnInit(): void {}

  btnClick() {
    this.route.navigateByUrl('/basket');
  }

  addNew(product: Product) {
    //si el producto no esta selecionado, lo añadimos y si esta selecionado hacemos sumatorio (se suma +1 quantity)
    let productCart = this.cart.find(
      (elementCart) => elementCart.id === product.id
    );
    if (productCart === undefined) {
      // this.cart.push(product);
      // } else {
      //   productCart.quantity === 1;
      let CartProductToAdd = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity:1,
        discount:0,
        totalPriceWithDiscount:0,
      };
      this.cart.push(CartProductToAdd)
    }else{
      productCart.quantity +=1
    }
    console.log(product);
  }
}
