import { Component, inject, signal } from '@angular/core';
import { LanguageService } from '../../../core/services/languageService';

@Component({
  selector: 'app-lenguage-selector',
  imports: [],
  templateUrl: './lenguage-selector.html',
  styleUrl: './lenguage-selector.css',
})
export class LenguageSelector {
  public readonly languageService = inject(LanguageService);
  public readonly currentLang = this.languageService.currentLang;
  
  public readonly languages = signal([
    { code: 'en', flag: '🇺🇸' },
    { code: 'es', flag: '🇪🇸' },
    { code: 'fr', flag: '🇫🇷' },
    { code: 'it', flag: '🇮🇹' },
  ]);

  changeLanguage(event: Event) {
     const target = event.target as HTMLSelectElement;
     const language = target.value;

     this.languageService.changeLang(language);
  }
}
