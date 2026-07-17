import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage],
  templateUrl: './me.html',
  styleUrl: './me.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
