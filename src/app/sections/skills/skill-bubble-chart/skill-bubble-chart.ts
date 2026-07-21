import { isPlatformBrowser } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  PLATFORM_ID,
  viewChild,
} from '@angular/core';
import type * as d3 from 'd3';
import { CORE_SKILLS } from '../skills.data';

@Component({
  selector: 'app-skill-bubble-chart',
  templateUrl: './skill-bubble-chart.html',
  styleUrl: './skill-bubble-chart.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillBubbleChartComponent {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly chartContainer = viewChild.required<ElementRef<HTMLElement>>('chartContainer');

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) return;
      void this.renderChart();
    });
  }

  private async renderChart(): Promise<void> {
    const containerEl = this.chartContainer().nativeElement;
    const width = containerEl.clientWidth || 800;
    const size = Math.min(width, 500);

    const d3Module = await import('d3');
    const svg = d3Module
      .select(containerEl)
      .append('svg')
      .attr('viewBox', `0 0 ${size} ${size}`)
      .style('display', 'block')
      .style('width', '100%')
      .style('height', 'auto');

    const packData: PackNode = {
      name: 'root',
      children: CORE_SKILLS.map((s) => ({ name: s.name, value: s.level })),
    };

    const root = d3Module
      .hierarchy<PackNode>(packData)
      .sum((d) => (d.value ?? 0) ** 2)
      .sort((a, b) => (b.value ?? 0) - (a.value ?? 0));

    const pack = d3Module.pack<PackNode>().size([size, size]).padding(2);
    const nodes = pack(root)
      .descendants()
      .filter((d) => d.depth > 0);

    const opacityScale = d3Module.scaleLinear().domain([3, 9]).range([0.3, 1]);

    const group = svg
      .selectAll('g')
      .data(nodes)
      .join('g')
      .attr('transform', (d) => `translate(${d.x},${d.y})`);

    group
      .append('circle')
      .attr('r', (d) => d.r)
      .attr('fill', 'var(--brand-bubble)')
      .attr('fill-opacity', (d) => opacityScale(d.data.value!))
      .attr('stroke', '#fff')
      .attr('stroke-width', 1.5);

    group
      .append('text')
      .text((d) => d.data.name)
      .attr('text-anchor', 'middle')
      .attr('dy', '0.35em')
      .attr('fill', '#fff')
      .style('font-size', (d) => `${Math.max(d.r / 3.5, 8)}px`)
      .style('font-weight', '600')
      .style('pointer-events', 'none');
  }
}

type PackNode = {
  name: string;
  value?: number;
  children?: PackNode[];
};
