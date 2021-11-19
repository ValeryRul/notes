import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export abstract class BaseApiService {
  constructor(private apollo: Apollo) {}

  protected get<T>(query: string): Observable<T> {
    return this.apollo
      .query<T>({
        query: gql`
          ${query}
        `
      })
      .pipe(map((result) => result.data));
  }

  protected mutate<T>(mutation: string, body: T):Observable<T | null> {
    return this.apollo
      .mutate<T>({
        mutation: gql`
          ${mutation}
        `,
        variables: { ...body }
      })
      .pipe(map((result) => result.data || null));
  }
}
