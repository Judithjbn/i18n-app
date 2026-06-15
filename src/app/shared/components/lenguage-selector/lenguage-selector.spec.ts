import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguageSelector } from './lenguage-selector';

describe('LenguageSelector', () => {
  let component: LenguageSelector;
  let fixture: ComponentFixture<LenguageSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LenguageSelector],
    }).compileComponents();

    fixture = TestBed.createComponent(LenguageSelector);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
