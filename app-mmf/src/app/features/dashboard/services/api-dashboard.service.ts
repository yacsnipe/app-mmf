import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class ApiDashboardService {

  private actionUrl!: string;
  private http: HttpClient = inject(HttpClient);

  public setController(_controller: string) {

  }

  public getSingle<T>(id: number): Observable<T> {

    return this.http.get<T>(this.actionUrl + id);
  }

  public add<T>(itemName: string): Observable<T> {

    const toAdd = JSON.stringify({ItemName: itemName});
    return this.http.post<T>(this.actionUrl, toAdd);

  }

  public update<T>(id: number, itemToUpdate: any): Observable<T> {
    return this.http
      .put<T>(this.actionUrl + id, JSON.stringify(itemToUpdate));
  }

  public delete<T>(id: number): Observable<T> {
    return this.http.delete<T>(this.actionUrl + id);
  }
}

@Injectable()

export class CustomInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.headers.has('Content-Type')) {
      req = req.clone({headers: req.headers.set('Content-Type', 'application/json')});
    }

    req = req.clone({headers: req.headers.set('Accept', 'application/json')});

    return next.handle(req);
  }
}
