import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  output,
  Signal,
  signal,
  viewChild,
} from '@angular/core';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { AppStore } from '../../../../application/state/app.store';

@Component({
  selector: 'app-expandable-panel',
  imports: [MatExpansionModule],
  templateUrl: './expandable-panel.html',
  styleUrl: './expandable-panel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpandablePanelComponent {
  readonly #appStore = inject(AppStore);
  readonly isMobile = this.#appStore.isMobile;
  #animationMs = computed(() => (this.isMobile() ? 0 : 350));

  private readonly panel = viewChild.required(MatExpansionPanel);
  private readonly hostRef = inject(ElementRef);

  expandedChange = output<boolean>();

  protected readonly isExpanded = signal(false);

  constructor() {
    effect(() => this.expandedChange.emit(this.isExpanded()));
  }

  protected onClickHandle(event: MouseEvent): void {
    event.stopPropagation();
    this.togglePanel();
  }

  protected handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      event.stopPropagation();
      this.togglePanel();
    }
  }

  private togglePanel(): void {
    const panelExpanded = this.panel()?.expanded;

    if (panelExpanded) {
      // Is expanded now collapsing
      this.panel()?.close();
      setTimeout(() => {
        this.isExpanded.set(false);
      }, this.#animationMs());
    } else {
      // Is collapsed now expanding
      this.isExpanded.set(true);
      setTimeout(() => {
        this.panel()?.open();
        this.scrollIntoView();
      }, this.#animationMs());
    }
  }

  private scrollIntoView() {
    setTimeout(
      () =>
        this.hostRef.nativeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        }),
      250,
    );
  }
}
