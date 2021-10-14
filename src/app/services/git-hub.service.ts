import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  constructor(private http: HttpClient) {
  };
  getData(): Observable<any> {
    const url = "http://api.github.com/users"
    
    return this.http.get<any>(url)
  

  }
