import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { BudgetPage } from './budget.page';
import { BudgetEditComponent } from './budget.edit.component';
import { BudgetNewComponent } from './budget.new.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: BudgetPage
      },
      {
        path: 'new',
        component: BudgetNewComponent
      },
      {
        path: 'edit/:id',
        component: BudgetEditComponent
      }
    ])
  ],
  declarations: [BudgetPage, BudgetEditComponent, BudgetNewComponent]
})
export class BudgetPageModule {}
