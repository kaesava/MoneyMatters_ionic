import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BudgetService } from './budget.service';
import { MockBudgetService } from './budget.mock.service';
import { Budget } from './budget';
import { defaultIterableDiffers } from '@angular/core/src/change_detection/change_detection';

@Component({
  selector: 'app-budget-edit',
  templateUrl: 'budget.edit.component.html',
  styleUrls: ['budget.page.scss'],
})

export class BudgetEditComponent implements OnInit {

  budget: Budget;
  edit_budget_form: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public formBuilder: FormBuilder,
    private budgetService: BudgetService,
    private mockBudgetService: MockBudgetService,
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      let id = params.id;
      this.budget = this.mockBudgetService.getBudget(id);
      this.edit_budget_form = this.formBuilder.group({
        desc: new FormControl(this.budget.desc, Validators.required),
        amt: new FormControl(this.budget.amt, Validators.required),
      });
    });
  }
  
  updateBudget(value){
    //this.budgetService.updateItem(value);
    this.budget.desc = value.desc;
    this.budget.amt = value.amt;
    this.mockBudgetService.updateBudget(this.budget.id, this.budget.desc, this.budget.amt);
    this.goBack();
  }

  cancel() {
    this.goBack();
  }
  
  goBack(){
    this.router.navigate(['/budgets']);
  }

}