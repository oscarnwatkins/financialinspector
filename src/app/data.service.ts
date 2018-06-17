import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class DataService {
  private incomeList = new BehaviorSubject<{ name: string, value: number }[]>([]);
  private expensesList = new BehaviorSubject<{ name: string, value: number }[]>([]);
  incomeObserve = this.incomeList.asObservable();
  expenseObserve = this.expensesList.asObservable();

  constructor() { }

  checkIncome(newIncomeList){
    this.incomeList.next(newIncomeList);
  }

  checkExpenses(newExpensesList){
    this.expensesList.next(newExpensesList);
  }
}
