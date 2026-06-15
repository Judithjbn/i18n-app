import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LenguageSelector } from "../../shared/components/lenguage-selector/lenguage-selector";

@Component({
  selector: 'app-products',
  imports: [RouterLink, LenguageSelector],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export default class Products {}
