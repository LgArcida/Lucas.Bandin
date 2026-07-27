import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Profile } from '@application/profile/profile';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly #profile = inject(Profile);
  protected readonly socials = toSignal(this.#profile.socials$, { initialValue: [] });
}
