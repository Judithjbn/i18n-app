import { Component, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LenguageSelector } from "../../shared/components/lenguage-selector/lenguage-selector";
import { TranslatePipe } from "@ngx-translate/core";
import { ProductCard } from "./product-card/product-card";
import { NameForm } from "../../shared/components/name-form/name-form";

import { PRODUCT_PLANS } from "./products.mock";

@Component({
  selector: 'app-products',
  imports: [RouterLink, LenguageSelector, TranslatePipe, ProductCard, NameForm],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export default class Products {
  private readonly platformId = inject(PLATFORM_ID);

  public readonly fullName = signal(this.getInitialName());
  public readonly plans = PRODUCT_PLANS;

  private getInitialName(): string {
    if (!isPlatformBrowser(this.platformId)) return 'Judith';
    return localStorage.getItem('firstName')?.trim() || 'Judith';
  }
}
