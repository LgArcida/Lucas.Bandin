import { Observable } from 'rxjs';
import { Technology } from '@domain/core/models/technology';

export type CoreRepository = {
  getTechnologies(): Observable<readonly Technology[]>;
};
