import { Component, OnInit, PLATFORM_ID, inject, output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-name-form',
  imports: [ReactiveFormsModule],
  templateUrl: './name-form.html',
  styleUrl: './name-form.css',
})
export class NameForm implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly storageKey = 'firstName';

  public readonly nameChange = output<string>();

  readonly form = this.fb.nonNullable.group({
    firstName: '',
  });

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const savedName = localStorage.getItem(this.storageKey)?.trim() || 'Judith';
    this.form.patchValue({ firstName: savedName }, { emitEvent: false });
    this.nameChange.emit(savedName);
  }

  emitName(): void {
    const value = this.form.controls.firstName.value.trim() || 'Judith';

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.storageKey, value);
    }

    this.nameChange.emit(value);
  }
}
