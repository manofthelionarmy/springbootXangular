import { Greeting } from './hello-world/hello';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class GreetingService {



  constructor(private http: HttpClient) { }

  // GET
  getGreeting(): Observable<Greeting>  {
    const url = 'http://localhost:8080/greeting';
    return this.http.get<Greeting>(url);
  }
  // PUT
  getGreetingFromInput(greeting: String): Observable<Greeting> {
    const  url = `http://localhost:8080/greeting?name=${greeting}`;
    return this.http.get<Greeting>(url);
  }

}
