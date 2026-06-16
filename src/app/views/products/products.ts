import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LenguageSelector } from "../../shared/components/lenguage-selector/lenguage-selector";
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: 'app-products',
  imports: [RouterLink, LenguageSelector, TranslatePipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export default class Products {

  public readonly fullName = signal('Judith');

}
