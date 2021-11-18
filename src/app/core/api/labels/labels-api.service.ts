import { Injectable } from '@angular/core';
import { BaseApiService } from '@appApi/base-api.service';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { Label } from './labels-api.types';
import { createLabelQuery, deleteLabelQuery, getAllLabelsQuery } from './labels.queries';

@Injectable({
  providedIn: 'root'
})
export class LabelsApiService extends BaseApiService {
  constructor(apollo: Apollo) {
    super(apollo);
  }

  getAll(): Observable<Label[]> {
    return this.get<Label[]>(getAllLabelsQuery);
  }

  createLabel(label: Partial<Label>): Observable<Partial<Label> | null> {
    return this.mutate<Partial<Label>>(createLabelQuery, label);
  }

  deleteLabel(id: string): Observable<Partial<Label> | null> {
    return this.mutate<Partial<Label>>(deleteLabelQuery, { id });
  }
}
