import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-mate-loader',
  templateUrl: './mate-loader.html',
  styleUrl: './mate-loader.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MateLoaderComponent {}
