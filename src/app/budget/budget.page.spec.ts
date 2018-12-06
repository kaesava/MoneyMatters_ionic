import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { BudgetPage } from './budget.page';

describe('BudgetPage', () => {
  let component: BudgetPage;
  let fixture: ComponentFixture<BudgetPage>;
  let budgetPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(BudgetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    budgetPage = fixture.nativeElement;
    const items = budgetPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
