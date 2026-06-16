import { Component } from '@angular/core';
import { LenguageSelector } from "../../shared/components/lenguage-selector/lenguage-selector";
import { RouterLink } from "@angular/router";
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: 'app-basic-plan',
  imports: [LenguageSelector, RouterLink, TranslatePipe],
  templateUrl: './basic-plan.html',
  styleUrl: './basic-plan.css',
})
export default class BasicPlan {}
