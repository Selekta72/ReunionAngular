import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/Json' })
};

@Injectable({
  providedIn: 'root'
})
export class ReunionService {

  constructor(private http: HttpClient) { }

  getAllReunions(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:9090/reunion/read');
  }
}
