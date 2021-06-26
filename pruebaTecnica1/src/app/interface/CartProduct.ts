export interface ProductCar {
  id: string;
  name: string;
  price: number;
  quantity: number;
  finalPrice?: number;
  finalPriceWithoutDiscount?:number;
  quantityFree?:number;
  // quantityFree/2
}
