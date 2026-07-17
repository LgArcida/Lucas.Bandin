import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { AboutComponent } from './sections/about/about';
import { MeComponent } from './sections/me/me';

@Component({
  selector: 'app-root',
  imports: [
    AboutComponent,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    TranslatePipe,
    MeComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private translate = inject(TranslateService);

  protected activeLang = signal<string>(this.translate.currentLang() || 'en');

  protected setLanguage(lang: string): void {
    this.translate.use(lang);
    this.activeLang.set(lang);
  }

  protected scrollToAbout(): void {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }
}
