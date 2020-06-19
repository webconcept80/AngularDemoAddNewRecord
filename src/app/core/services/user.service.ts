import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(environment.apiBaseUrl + '/users').pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  addUser(data): Observable<any> {
    return this.http.post(environment.apiBaseUrl + '/user', data);
  }
}
