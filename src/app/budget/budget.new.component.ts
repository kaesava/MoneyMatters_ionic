import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Budget } from './budget';
import { BudgetService } from './budget.service';
import { MockBudgetService } from './budget.mock.service';

@Component({
  selector: 'app-budget-create',
  templateUrl: './budget.new.component.html',
  styleUrls: ['./budget.page.scss']
})

export class BudgetNewComponent implements OnInit {

  new_budget_form: FormGroup;
  budget : Budget;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private budgetService: BudgetService,
    private mockBudgetService: MockBudgetService,
  ) { }

  ngOnInit() {
    this.new_budget_form = this.formBuilder.group({
      desc: new FormControl('', Validators.required),
      amt: new FormControl('', Validators.required)
    });
  }

  createBudget(value){
    this.mockBudgetService.createBudget(value.desc, value.amt);
    this.new_budget_form.reset();
    this.goBack();
  }

  cancel() {
    this.goBack();
  }

  goBack(){
    this.router.navigate(['/budgets']);
  }
}