import { inject, Injectable, signal } from '@angular/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  public readonly cookie = inject(SsrCookieService);
  public  translate = inject(TranslateService);
  currentLang = signal('');

  changeLang( lang: string) {
    this.cookie.set('lang', lang);

    this.translate.setFallbackLang(lang);
    this.translate.use(lang);
    this.currentLang.set(lang);
  }
}
