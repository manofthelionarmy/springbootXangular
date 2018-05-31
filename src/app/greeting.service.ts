import { Greeting } from './hello-world/hello';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  url = 'http://localhost:8080/greeting';

  constructor(private http: HttpClient) { }

  getGreeting(): Observable<Greeting>  {
    return this.http.get<Greeting>(this.url);
  }

}
