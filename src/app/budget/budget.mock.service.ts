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
      '_id': "1",
      'desc': "Example 1",
      'amt': 100
    },
    {
      '_id': "2",
      'desc': "Example 2",
      'amt': 200
    }
  ]
  getBudgets() {
    return this.budgets;
  }

  getBudget(_id : string) {
    let budgetIndex = this.budgets.findIndex(item => item._id == _id);
    return this.budgets[budgetIndex];
  }

  createBudget(desc : string, amt : number) {
    let randomId = Math.round(Math.random()*100);
    this.budgets.push({
      '_id': String(randomId),
      'desc': desc,
      'amt': amt
    });
  }

  updateBudget(_id: string, desc : string, amt : number) {
    let budgetIndex = this.budgets.findIndex(item => item._id == _id);
    this.budgets[budgetIndex].desc = desc;
    this.budgets[budgetIndex].amt = amt;
  }

  deleteBudget(_id : string) {
    const budgetIndex: number = this.budgets.findIndex(budget => budget._id == _id);
    if (budgetIndex !== -1) {
        this.budgets.splice(budgetIndex, 1);
    } 
  }
}