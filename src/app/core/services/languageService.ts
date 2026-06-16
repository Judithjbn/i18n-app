import { inject, Injectable, signal } from '@angular/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly cookie = inject(SsrCookieService);
  private readonly translate = inject(TranslateService);
  private readonly defaultLang = 'en';

  readonly currentLang = signal(this.cookie.get('lang') || this.defaultLang);


  constructor() {
    this.translate.setFallbackLang(this.defaultLang);
    this.translate.use(this.currentLang());
  }

  changeLang(lang: string) {
    this.cookie.set('lang', lang);
    this.translate.use(lang);
    this.currentLang.set(lang);
  }
}
