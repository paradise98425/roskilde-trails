import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trail } from '../models/trail.model';

const baseUrl = 'http://localhost:8080/api/trail';

@Injectable({
  providedIn: 'root'
})
export class TrailService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Trail[]> {
    return this.http.get<Trail[]>(baseUrl);
  }

  get(id: any): Observable<Trail> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(name: any): Observable<Trail[]> {
    return this.http.get<Trail[]>(`${baseUrl}?name=${name}`);
  }
}
