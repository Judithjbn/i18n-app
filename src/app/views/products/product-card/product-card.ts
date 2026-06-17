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
  public readonly featured = input(false);
  public readonly priceKey = input<string | null>(null);
  public readonly perMonthLabelKey = input('plans.texts.perMonth');
  public readonly featureKeys = input<string[]>([]);
}
