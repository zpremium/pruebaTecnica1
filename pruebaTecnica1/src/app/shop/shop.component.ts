import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../interface/products';
import { PRODUCTS } from '../data/mock-products';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {

  products=PRODUCTS;
  product?: Product[];

  constructor(private route: Router) {}

  ngOnInit(): void {}

  btnClick() {
    this.route.navigateByUrl('/basket');
  }
}
