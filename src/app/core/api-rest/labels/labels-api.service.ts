import { Injectable } from '@angular/core';
import { BaseApiService } from '@appApi/base-api.service';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Label } from '../../types/labels-api.types';
import { createLabelQuery, deleteLabelQuery, getAllLabelsQuery } from './labels.queries';

@Injectable({
  providedIn: 'root'
})
export class LabelsApiService extends BaseApiService {
  constructor(apollo: Apollo) {
    super(apollo);
  }

  getAll$(): Observable<Label[]> {
    return this.get$(getAllLabelsQuery).pipe(map((res) => res.labels as Label[]));
  }

  createLabel$(label: Partial<Label>): Observable<Label> {
    return this.mutate$<Partial<Label>>(createLabelQuery, label).pipe(map((res) => res.createLabel as Label));
  }

  deleteLabel$(id: string): Observable<string> {
    return this.mutate$<Partial<Label>>(deleteLabelQuery, { id }).pipe(map((res) => res.deleteLabel.id as string));
  }
}
