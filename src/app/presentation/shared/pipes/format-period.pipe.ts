import { Pipe, PipeTransform } from '@angular/core';
import type { Period } from '@domain/experience/models/period';

@Pipe({
  name: 'formatPeriod',
  pure: true,
})
export class FormatPeriodPipe implements PipeTransform {
  transform(period: Period, presentLabel = 'Present'): string {
    const start = period.start.toFormat('MMM yyyy');
    const end = period.isCurrent ? presentLabel : period.end!.toFormat('MMM yyyy');
    return `${start} – ${end}`;
  }
}
