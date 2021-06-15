import { Product } from '../interface/products';

export const PRODUCTS: Product[]=[

  {
    "price": 3.11,
    "id": "GR1",
    "name": "Green tea",
    "img":"../assets/img/GreenTea.jpg",
    "discount":"Buy-one-get-one-free"
  },
  {
    "price": 5.00,
    "id": "SR1",
    "name": "Strawberries",
    "img":"../assets/img/strawberry.jpg",
    "discount":"If you buy 3 or more strawberries, the price should drop to £4.50"
  },
  {
    "price": 11.23,
    "id": "CF1",
    "name": "Coffee",
    "img":'../assets/img/coffee.jpg',
    "discount":"If you buy 3 or more coffees, the price of all coffees should drop to two thirds"
  }
]
