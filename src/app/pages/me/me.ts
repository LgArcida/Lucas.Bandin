import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage, TranslatePipe],
  templateUrl: './me.html',
  styleUrl: './me.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
