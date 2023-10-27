import { Injectable } from '@angular/core';
import { UserAnswers } from '../models/data.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QuestService {
  //private url = 'http://localhost:3000/api/tesis';
  private url = 'https://tesisapi-production.up.railway.app/api/tesis';

  constructor(
    private http: HttpClient
  ) { }

  // Verifica si existe data en el localStorage
  checkLocal(): boolean {
    let res: boolean = false;
    if(localStorage.getItem('user_data')) {
      res = true;
    }
    return res;
  }

  // Guarda la data en el localStorage
  saveToLocal(data: UserAnswers) {
    localStorage.setItem('user_data', JSON.stringify(data));
  }

  // Recupera la data del localStorage
  getFromLocal(): UserAnswers {
    let data: UserAnswers = JSON.parse(localStorage.getItem('user_data') || '{}');
    return data;
  }

  // Elimina la data del localStorage
  deleteLocal() {
    localStorage.removeItem('user_data');
  }

  // Guarda la encuesta
  saveQuest(data: UserAnswers) {
    return this.http.post(`${this.url}/save`, data);
  }
}
