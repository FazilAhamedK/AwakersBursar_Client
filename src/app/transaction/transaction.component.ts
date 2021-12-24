import { Component, OnInit } from '@angular/core';
import { Transaction } from '../models/Transaction';
import { TransactionType } from '../models/TransactionType';
import { TransactionView } from '../models/TransactionView';
import { TransactionService } from './transaction.service';

@Component
({
  selector: 'transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit
{
  /* Storing the enums in a variable,
  so that they can be used directly in View */
  TransactionType = TransactionType;
  TransactionView = TransactionView;

  preferredType: TransactionType = TransactionType.CREDIT;
  preferredView: TransactionView = TransactionView.TABLE;

  transactions: Array<Transaction> = [];
  errorMessage: string | undefined;

  constructor(private transactionService: TransactionService)
  { }

  ngOnInit(): void
  {
    this.transactions = [];
    
    this.transactionService.getAllTransactions()
                           .subscribe
                           ({
                              next: (transactions) => {this.transactions = transactions.sort((a, b) => b.transactionID - a.transactionID)},
                              error: (error) => {this.errorMessage = error.message}
                           });
  }
}