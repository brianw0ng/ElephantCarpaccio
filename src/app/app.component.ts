import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shoppingCartModel: ShoppingCartModel | undefined;

  getOriginalTotal(): number {
    return this.shoppingCartModel?.numOfItems! * this.shoppingCartModel?.priceUnit!;
  }

  onClick(event: ShoppingCartModel) {
    this.shoppingCartModel = event;
  }
}

export interface ShoppingCartModel {
  numOfItems: number | undefined,
  priceUnit: number | undefined,
  stateCode: string | undefined,
  totalPrice: number | undefined
}