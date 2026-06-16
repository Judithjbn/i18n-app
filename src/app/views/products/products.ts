import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LenguageSelector } from "../../shared/components/lenguage-selector/lenguage-selector";
import { TranslatePipe } from "@ngx-translate/core";
import { ProductCard } from "./product-card/product-card";
import { PRODUCT_PLANS } from "./products.mock";

@Component({
  selector: 'app-products',
  imports: [RouterLink, LenguageSelector, TranslatePipe, ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export default class Products {

  public readonly fullName = signal('Judith');
  public readonly plans = PRODUCT_PLANS;

}
