import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export abstract class BaseApiService {
  constructor(private apollo: Apollo) {}

  protected get(query: string): Observable<any> {
    return this.apollo
      .query({
        query: gql`
          ${query}
        `
      })
      .pipe(map((result) => result.data));
  }

  protected mutate<T>(mutation: string, body: T): Observable<any> {
    return this.apollo
      .mutate({
        mutation: gql`
          ${mutation}
        `,
        variables: { ...body }
      })
      .pipe(map((result) => result.data));
  }
}
