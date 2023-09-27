
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagerieService {
  constructor(private http: HttpClient) {}

  getConversations(offset: number, limit: number): Observable<any> {
    // Utilisez HttpClient pour récupérer les conversations en fonction de l'offset et de la limite.
    // Vous devrez probablement ajuster la logique en fonction de votre API.
    const url = `/api/conversations?offset=${offset}&limit=${limit}`;
    return this.http.get(url);
  }
}