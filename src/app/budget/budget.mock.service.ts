import { Injectable } from '@angular/core';
import { Budget } from './budget';
import { buffer } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class MockBudgetService {

  constructor() { }

  budgets: Array<Budget> = [
    {
      'id': 1,
      'desc': "Example 1",
      'amt': 100
    },
    {
      'id': 2,
      'desc': "Example 2",
      'amt': 200
    }
  ]
  getBudgets() {
    return this.budgets;
  }

  getBudget(id : number) {
    let budgetIndex = this.budgets.findIndex(item => item.id == id);
    return this.budgets[budgetIndex];
  }

  createBudget(desc : string, amt : number) {
    let randomId = Math.round(Math.random()*100);
    this.budgets.push({
      'id': randomId,
      'desc': desc,
      'amt': amt
    });
  }

  updateBudget(id: number, desc : string, amt : number) {
    let budgetIndex = this.budgets.findIndex(item => item.id == id);
    this.budgets[budgetIndex].desc = desc;
    this.budgets[budgetIndex].amt = amt;
  }

  deleteBudget(id : number) {
    const budgetIndex: number = this.budgets.findIndex(budget => budget.id == id);
    if (budgetIndex !== -1) {
        this.budgets.splice(budgetIndex, 1);
    } 
  }
}