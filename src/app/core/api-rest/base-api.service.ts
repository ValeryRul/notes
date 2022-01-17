import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

export abstract class BaseApiService {
  
  constructor(protected http: HttpClient) {
    console.log(this.http)
  }

  protected get(url: string, params?: any): Observable<any> {
    return this.http.get(`${environment.url}${url}`, { params });
  }

  protected post(url: string, params?: any): Observable<any> {
    return this.http.post(`${environment.url}${url}`, params);
  }

  protected put(url: string, params?: any): Observable<any> {
    return this.http.put(`${environment.url}${url}`, params);
  }

  protected delete(url: string, params?: any): Observable<any> {
    return this.http.delete(`${environment.url}${url}`, params);
  }
}
