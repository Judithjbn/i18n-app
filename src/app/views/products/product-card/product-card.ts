import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-product-card',
  imports: [NgClass, TranslatePipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  readonly featured = input(false);
  readonly priceKey = input<string | null>(null);
  readonly perMonthLabelKey = input('plans.texts.perMonth');
  readonly featureKeys = input<string[]>([]);
}
