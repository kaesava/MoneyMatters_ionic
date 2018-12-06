import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Budget } from './budget';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BudgetService {

  uri = 'http://localhost:4000/api/budgets';

  constructor(private http: HttpClient) { }

  getBudget(id : string) {
    return this.http.get<Budget>(`${this.uri}/${id}`);
  }

  getBudgets() {
    return this.http.get<Budget[]>(`${this.uri}/`);
  }

  createBudget(desc : string, amt : number) {
    return this.http.post<any>(`${this.uri}/`, {desc, amt});
  }

  updateBudget(id: string, desc : string, amt : number) {
    return this.http.put<any>(`${this.uri}/${id}`, {desc, amt});
  }

 deleteBudget(id : string) {
      return this.http.delete(`${this.uri}/${id}`);
    }
}