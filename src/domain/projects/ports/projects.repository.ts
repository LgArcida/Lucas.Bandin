import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import type { Project } from '../models/project';

export type ProjectRepository = {
  getProjects(): Observable<readonly Project[]>;
};

export const PROJECT_REPOSITORY = new InjectionToken<ProjectRepository>('ProjectRepository');