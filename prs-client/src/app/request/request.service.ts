import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from './request.class';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  baseurl: string = "http://localhost:5000/api/requests";
  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Request[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Request[]>;
  }
  get(id: number): Observable<Request> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Request>;
  }
  reviewlist(id: number): Observable<Request[]> {
    return this.http.get(`${this.baseurl}/reviews/${id}`) as Observable<Request[]>;
  }
  create(request: Request): Observable<Request> {
    return this.http.post(`${this.baseurl}`, request) as Observable<Request>;
  }
  change(request: Request): Observable<any> {
    return this.http.put(`${this.baseurl}/${request.id}`, request) as Observable<any>;
  }
  review(request: Request, id: number): Observable<any> {
    return this.http.put(`${this.baseurl}/review/${id}`, request) as Observable<any>;
  }
  approve(request: Request, id: number): Observable<any> {
    return this.http.put(`${this.baseurl}/approve/${id}`,  request) as Observable<any>;
  }
  reject(request: Request, id: number): Observable<any> {
    return this.http.put(`${this.baseurl}/reject/${id}`,  request) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  }

}
