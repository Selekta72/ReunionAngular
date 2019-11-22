import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/Json' })
};

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  getAllRoles(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:9090/role/read');
  }

  deleteRole(roleId: number): Observable<any[]> {
    return this.http.delete<any[]>('http://localhost:9090/collaborateur/delete/' + collaborateurId);
  }
}
