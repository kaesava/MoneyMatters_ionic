import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Budget } from './budget';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BudgetService {

  uri = 'http://localhost:4000/budgets';

  constructor(private http: HttpClient) { }

  getBudget(id : number) {
    return this.http.get<Budget>(`${this.uri}/${id}`);
  }

  getBudgets() {
    return this.http.get<Budget[]>(`${this.uri}/index`);
  }

  createBudget(desc : string, amt : number) {
    this.http.post<any>(`${this.uri}/create`, {desc, amt})
    .pipe(map(budget => {
      // login successful if there's a user in the response
      if (budget) {
        console.log('Done');
      }
      else {
        console.log('Failed');
      }
      return budget;
  }));
  }

  updateBudget(id: number, desc : string, amt : number) {
    const obj = {
      desc: desc,
      amt: amt
    };
    this
      .http
      .put(`${this.uri}/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

    deleteBudget(id : number) {
      return this
                .http
                .delete(`${this.uri}/${id}`);
    }
}