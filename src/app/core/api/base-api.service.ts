import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export abstract class BaseApiService {
  constructor(private apollo: Apollo) {}

  protected get<T>(query: string): Observable<T> {
    return this.apollo.query<T>({ query: gql`${query}` }).pipe(map((result) => result.data));
  }

}
