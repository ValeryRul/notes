import { Injectable } from '@angular/core';
import { BaseApiService } from '@appApi/base-api.service';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { Label, labelsQuery } from './labels-api.types';

@Injectable({
  providedIn: 'root'
})
export class LabelsApiService extends BaseApiService {
  constructor(apollo: Apollo) {
    super(apollo);
  }

  getAll(): Observable<Label[]> {
    return this.get<Label[]>(labelsQuery);
  }
}
