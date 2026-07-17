import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideRouter([]),
        {
          provide: TranslateService,
          useValue: {
            currentLang: () => 'en',
            use: () => undefined,
            translate: () => () => '',
            onTranslationChange: of({}),
            onLangChange: of({}),
            onFallbackLangChange: of({}),
            onTranslationRefresh: of(undefined),
          },
        },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render toggle menu button', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const menuBtn = compiled.querySelector('[aria-label="Toggle navigation menu"]');
    expect(menuBtn).toBeTruthy();
  });
});
