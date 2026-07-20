import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  output,
  Signal,
  signal,
  viewChild,
} from '@angular/core';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { ViewUtils } from '../../utils/view-utils';

@Component({
  selector: 'app-expandable-panel',
  imports: [MatExpansionModule],
  templateUrl: './expandable-panel.html',
  styleUrl: './expandable-panel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpandablePanelComponent {
  readonly isMobile = ViewUtils.isMobile;
  #ANIMATION_MS = computed(() => (this.isMobile() ? 0 : 350));

  private readonly panel = viewChild.required(MatExpansionPanel);
  private readonly hostRef = inject(ElementRef);

  expandedChange = output<boolean>();

  protected readonly isExpanded = signal(false);
  protected readonly hasFullWidth = signal(false);

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
        this.hasFullWidth.set(false);
        this.isExpanded.set(false);
        this.expandedChange.emit(false);
      }, this.#ANIMATION_MS());
    } else {
      // Is collapsed now expanding
      this.hasFullWidth.set(true);
      setTimeout(() => {
        this.panel()?.open();
        this.isExpanded.set(true);
        this.expandedChange.emit(true);
        setTimeout(
          () =>
            this.hostRef.nativeElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            }),
          250,
        );
      }, this.#ANIMATION_MS());
    }
  }
}
