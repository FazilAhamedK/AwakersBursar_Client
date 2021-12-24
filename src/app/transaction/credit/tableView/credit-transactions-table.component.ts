import { Component, Input } from '@angular/core';
import { CreditTransaction } from 'src/app/models/CreditTransaction';
import { Transaction } from 'src/app/models/Transaction';

@Component
({
  selector: 'credit-transactions-table',
  templateUrl: './credit-transactions-table.component.html',
  styleUrls: ['./credit-transactions-table.component.scss']
})
export class CreditTransactionsTableComponent
{
  @Input()
  transactions: Array<CreditTransaction> = [];
}