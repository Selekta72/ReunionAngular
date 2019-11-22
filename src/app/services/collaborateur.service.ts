import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Collaborateur} from '../models/collaborateur';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/Json' })
};

@Injectable({
  providedIn: 'root'
})
export class CollaborateurService {

  constructor(private http: HttpClient) { }

  getAllCollaborateurs(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:9090/collaborateur/read');
  }

  deleteCollaborateur(collaborateurId: number): Observable<any[]> {
    return this.http.delete<any[]>('http://localhost:9090/collaborateur/delete/' + collaborateurId);
  }

  createCollaborateur(collaborateur: Collaborateur): Observable<Collaborateur> {
    return this.http.post<Collaborateur>('http://localhost:9090/collaborateur/create', collaborateur);
  }
}
