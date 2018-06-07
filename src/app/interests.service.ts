
import { Interests } from './interests/interest';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, last } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type': 'application/json',
     'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class InterestsService {

  constructor(private http: HttpClient) { }

  // GET
  getInterests(): Observable<Interests[]> {
    const url = 'http://localhost:8080/interests';
    // return this.http.get<Interests[]>(url);
    return this.http.get<Interests[]>(url);
  }
  // PUT
  updateInterests(interests: Interests): Observable<any> {
    const url = 'http://localhost:8080/interests';
    return this.http.put(url, interests, httpOptions);
  }

  // POST
  saveInterest(interests: Interests): Observable<Interests> {
    const url = 'http://localhost:8080/interests';
    return this.http.post<Interests>(url, interests, httpOptions);
  }

  // DELETE
  deleteInterest(interests: Interests): Observable<Interests> {
    const url = 'http://localhost:8080/interests';
    return this.http.delete<Interests>(url, httpOptions);
  }

}
