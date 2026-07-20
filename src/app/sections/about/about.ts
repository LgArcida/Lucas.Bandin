import { ChangeDetectionStrategy, Component, ElementRef, signal, viewChild } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-about',
  imports: [NgOptimizedImage, TranslatePipe, MatExpansionModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  protected readonly panel = viewChild.required(MatExpansionPanel);
  protected readonly aboutSection = viewChild<ElementRef<HTMLElement>>('aboutSection');
  protected readonly isExpanded = signal(false);
  protected readonly hasFullWidth = signal(false);

  protected handleClick(event: MouseEvent): void {
    event.stopPropagation();
    const isExpanded = this.panel()?.expanded;

    if (isExpanded) {
      // Is expanded now collapsing
      this.panel()?.close();
      setTimeout(() => {
        this.hasFullWidth.set(false);
        this.isExpanded.set(false);
      }, ANIMATION_MS);
    } else {
      // Is collapsed now expanding
      this.hasFullWidth.set(true);
      setTimeout(() => {
        this.panel()?.open();
        this.isExpanded.set(true);
      }, ANIMATION_MS);
    }
  }
}

const ANIMATION_MS = 350;
