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
    private budgetService: BudgetService
  ) { }

  ngOnInit() {
    // MOCK-UP: this.budget = this.budgetService.getBudget(params._id);

    this.route.params.subscribe( params => {
      this.budgetService.getBudget(params['id']).subscribe((budget: Budget) => {
        this.budget = budget;
        this.edit_budget_form = this.formBuilder.group({
          desc: new FormControl(this.budget.desc, Validators.required),
          amt: new FormControl(this.budget.amt, Validators.required),
        });
      });
    });
  }
  
  updateBudget(value){
  
    // MOCK-UP: this.budgetService.updateBudget(this.budget.id, value.desc, value.amt);
    this.budgetService.updateBudget(this.budget._id, value.desc, value.amt).subscribe((data: Budget) => {
      if(data) {
        this.budget.desc = data.desc;
        this.budget.amt = data.amt;
        console.log("Budget updated successfully");
      } else {
        console.log("could not update Budget")
      }
    });
    this.goBack();
  }

  cancel() {
    this.goBack();
  }
  
  goBack(){
    this.router.navigate(['/budgets']);
  }

}