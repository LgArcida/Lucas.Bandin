import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Profile } from '@application/profile/profile';
import { ProfileRepository } from '@domain/profile/ports/profile.repository';
import { StaticProfileRepository } from '@infrastructure/repositories/static-profile.repository';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-footer',
  providers: [
    StaticProfileRepository,
    {
      provide: Profile,
      useFactory: (repo: ProfileRepository) => new Profile(repo),
      deps: [StaticProfileRepository],
    },
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
})
export class FooterComponent {
  readonly #profile = inject(Profile);
  protected readonly socials = toSignal(this.#profile.socials$, { initialValue: [] });
}
