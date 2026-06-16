import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Footer],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
