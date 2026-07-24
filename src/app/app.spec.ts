import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { LOCALIZATION_PORT } from '@application/localization/localization.port';
import { ProfileRepository } from '@domain/profile/ports/profile.repository';
import { Profile } from '@domain/profile/models/profile';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    const mockRepo: ProfileRepository = { getSkills: () => of([]) };

    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        {
          provide: TranslateService,
          useValue: {
            currentLang: () => 'en' as const,
            use: () => undefined,
            translate: () => () => '',
            onTranslationChange: of({}),
            onLangChange: of({}),
            onFallbackLangChange: of({}),
            onTranslationRefresh: of(undefined),
          },
        },
        { provide: LOCALIZATION_PORT, useValue: { setLanguage: () => undefined, getCurrentLanguage: () => 'en' } },
        { provide: Profile, useFactory: () => new Profile(mockRepo) },
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
