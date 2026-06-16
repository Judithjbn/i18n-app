import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { provideTranslateLoader, provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import Products from './products';

class TestCookieService {
  private readonly store = new Map<string, string>();

  get(key: string): string {
    return this.store.get(key) ?? '';
  }

  set(key: string, value: string): void {
    this.store.set(key, value);
  }
}

class TestTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    void lang;
    return of({});
  }
}

describe('Products', () => {
  let component: Products;
  let fixture: ComponentFixture<Products>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Products],
      providers: [
        provideRouter([]),
        { provide: SsrCookieService, useClass: TestCookieService },
        provideTranslateService({
          lang: 'en',
          fallbackLang: 'en',
          loader: provideTranslateLoader(TestTranslateLoader),
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Products);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
