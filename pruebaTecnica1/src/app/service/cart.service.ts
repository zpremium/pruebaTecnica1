import { Injectable } from '@angular/core';
import { PRODUCTS } from '../data/mock-products';
import { ProductCar } from '../interface/CartProduct';
import { Product } from '../interface/products';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products = PRODUCTS;
  cart: ProductCar[] = [];

  cartProducts: ProductCar[] = [];
  precioTotal = new BehaviorSubject<number>(0);
  totalProducts = new BehaviorSubject<number>(0);
  total$ = this.precioTotal.asObservable();
  carritoLength$ = this.totalProducts.asObservable();

  constructor() {}

  addNew(product: Product) {
    //si el producto no esta selecionado, lo añadimos y si esta selecionado hacemos sumatorio (se suma +1 quantity)
    let productCart = this.cart.find(
      (elementCart) => elementCart.id === product.id
    );
    if (productCart === undefined) {
      let CartProductToAdd = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        discount: 0,
        totalPriceWithDiscount: 0,
      };
      this.cart.push(CartProductToAdd);
    } else {
      productCart.quantity += 1;
    }
    console.log(product);
    //  this.applyDiscount()
    this.checkDiscount(this.cart);
    this.getTotal();
  }

  deleteNew(product: Product) {
    //si hay un solo producto lo elimina, si hay mas de uno resta en 1 la cantidad hasta llegar a solo 1
    let productCart = this.cart.find(
      (elementCart) => elementCart.id === product.id
    );

    if (productCart!.id === 'GR1') {
      productCart!.quantity -= 2;
    } else {
      productCart!.quantity -= 1;
    }
    if (productCart!.quantity <= 0) {
      let index = this.cart.indexOf(productCart!);
      this.cart.splice(index, 1);
    }
    console.log(product);
    this.checkDiscount(this.cart); this.getTotal()
    return this.cart;

  }

  checkDiscount(list: ProductCar[]) {
    for (let i = 0; i < list.length; i++) {
      switch (list[i].id) {
        case 'GR1':
          if (list[i].quantity % 2 != 0) {
            list[i].quantity += 1;
            list[i].finalPrice = list[i].price * (list[i].quantity / 2);
          } else{
              list[i].finalPrice = list[i].price * (list[i].quantity / 2)
          }
          break;

        case 'SR1':
          if (list[i].quantity >= 3) {
            list[i].finalPrice = (list[i].price - 0.5) * list[i].quantity;
          } else if (list[i].quantity === 2) {
            list[i].finalPrice = list[i].price * 2;
          } else if (list[i].quantity === 1) {
            list[i].finalPrice = list[i].price;
          }
          break;

        case 'CF1':
          if (list[i].quantity >= 3) {
            list[i].finalPrice = list[i].price * 0.67 * list[i].quantity;
          } else if (list[i].quantity === 1) {
            list[i].finalPrice = list[i].price;
          } else if (list[i].quantity === 2) {
            list[i].finalPrice = list[i].price * 2;
          }
          break;
      }
    }
  }

  getCart(){
    return this.cart
  }

  getTotal() {
    let newTotal = this.cart.reduce((acumulado, siguiente) => {
      return acumulado + siguiente.finalPrice!;
    }, 0);

    let cartNumberOfProducts = this.cart.reduce((acumulado, siguiente) => acumulado + siguiente.quantity, 0);
    console.log('total', cartNumberOfProducts);
    this.precioTotal.next(newTotal);
    this.totalProducts.next(cartNumberOfProducts);
  }
}
