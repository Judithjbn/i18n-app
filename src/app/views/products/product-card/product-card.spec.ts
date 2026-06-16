import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateLoader, provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import { ProductCard } from './product-card';

class TestTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    void lang;
    return of({});
  }
}

describe('ProductCard', () => {
  let component: ProductCard;
  let fixture: ComponentFixture<ProductCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCard],
      providers: [
        provideTranslateService({
          lang: 'en',
          fallbackLang: 'en',
          loader: provideTranslateLoader(TestTranslateLoader),
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
