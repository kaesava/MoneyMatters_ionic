import { Component, OnInit } from '@angular/core';

import { BudgetService } from './budget.service';
import { MockBudgetService } from './budget.mock.service';
import { Budget } from './budget';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budget',
  templateUrl: 'budget.page.html',
  styleUrls: ['budget.page.scss']
})
export class BudgetPage implements OnInit {

  private budgets: Budget[];
  constructor(private router: Router, private budgetservice: BudgetService, private mockbudgetservice: MockBudgetService) {}

  ngOnInit() {
    // download back budgets
    this.budgets = this.mockbudgetservice.getBudgets();

    //this.budgetservice.getBudgets().subscribe((data: Budget[]) => {
    //  this.budgets = data;
    //});
  }
  new(){
    this.router.navigate(['/budgets/new']);
  }
  editBudget(id) {
    this.router.navigate([`/budgets/edit/${id}`]);
  }
  deleteBudget(id) {
    this.mockbudgetservice.deleteBudget(id);
    //this.budgetservice.deleteBudget(id).subscribe(res => {
    //  console.log('Budget deleted successfully');
    //});
  }

  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/budget', JSON.stringify(item)]);
  // }
}