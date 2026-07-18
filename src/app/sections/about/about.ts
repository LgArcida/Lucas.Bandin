import {
  ChangeDetectionStrategy,
  Component,
  signal,
  viewChild,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';

const PANEL_CLOSE_MS = 225;
const PANEL_OPEN_MS = 300;

@Component({
  selector: 'app-about',
  imports: [NgOptimizedImage, TranslatePipe, MatExpansionModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  protected readonly panel = viewChild.required(MatExpansionPanel);
  protected readonly isWide = signal(false);
  private isOpen = false;

  protected handleClick(event: MouseEvent): void {
    event.stopPropagation();

    if (this.isOpen) {
      this.panel().close();
      setTimeout(() => {
        this.isWide.set(false);
        this.isOpen = false;
      }, PANEL_CLOSE_MS);
      return;
    }

    this.isWide.set(true);
    this.isOpen = true;
    setTimeout(() => {
      this.panel().open();
    }, PANEL_OPEN_MS);
  }
}
