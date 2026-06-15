import { Component } from '@angular/core';
import { LenguageSelector } from "../../shared/components/lenguage-selector/lenguage-selector";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-basic-plan',
  imports: [LenguageSelector, RouterLink],
  templateUrl: './basic-plan.html',
  styleUrl: './basic-plan.css',
})
export default class BasicPlan {}
