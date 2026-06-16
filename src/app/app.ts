import { Component, effect, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { LanguageService } from './core/services/languageService';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('i18n-app');

  public readonly cookie = inject(SsrCookieService);
  public readonly languageService = inject(LanguageService);


  cookieLogEffect = effect(() => {
    console.log(this.cookie.get('lang'));

    const lang = this.cookie.get('lang') || 'en';
    this.languageService.changeLang(lang);
  });



}
