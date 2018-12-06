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

  constructor(private router: Router, private budgetservice: BudgetService) {}

  ngOnInit() {
    // download back budgets
    //MOCKUP: this.budgets = this.budgetservice.getBudgets();

    this.budgetservice.getBudgets().subscribe((budgets: Budget[]) => {
      if(budgets) console.log('Budgets loaded successfully'); else console.log('Could not load Budgets');
      this.budgets = budgets;
    });
  }
  
  new(){
    this.router.navigate(['/budgets/new']);
  }
  editBudget(_id) {
    this.router.navigate([`/budgets/edit/${_id}`]);
  }
  deleteBudget(_id) {
    // MOCKUP: this.budgetservice.deleteBudget(id);
    this.budgetservice.deleteBudget(_id).subscribe(budget => {
      if(budget) console.log('Budget deleted successfully'); else console.log('Could not delete Budget');
    });
  }

  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/budget', JSON.stringify(item)]);
  // }
}