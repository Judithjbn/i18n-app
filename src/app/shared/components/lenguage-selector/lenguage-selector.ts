import { Component, effect, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs';
import { LanguageService } from '../../../core/services/languageService';

@Component({
  selector: 'app-lenguage-selector',
  imports: [ReactiveFormsModule],
  templateUrl: './lenguage-selector.html',
  styleUrl: './lenguage-selector.css',
})
export class LenguageSelector {
  public readonly languageService = inject(LanguageService);
  public readonly currentLang = this.languageService.currentLang;

  public readonly langControl = new FormControl(this.currentLang(), { nonNullable: true });

  public readonly languages = signal([
    { code: 'en', flag: '🇺🇸' },
    { code: 'es', flag: '🇪🇸' },
    { code: 'fr', flag: '🇫🇷' },
    { code: 'it', flag: '🇮🇹' },
  ]);

  private readonly syncSelectedLanguage = effect(() => {
    const lang = this.currentLang();
    if (this.langControl.value !== lang) {
      this.langControl.setValue(lang, { emitEvent: false });
    }
  });

  private readonly syncServiceLanguage = this.langControl.valueChanges
    .pipe(distinctUntilChanged(), takeUntilDestroyed())
    .subscribe((lang) => {
      this.languageService.changeLang(lang);
    });
}
