import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditTransaction } from '../models/CreditTransaction';
import { DebitTransaction } from '../models/DebitTransaction';
import { Transaction } from '../models/Transaction';
import { URI } from '../models/URI';

@Injectable()
export class TransactionService
{
  constructor(private httpClient: HttpClient)
  { }

  getAllTransactions(): Observable<Array<Transaction>>
  {
    return this.httpClient.get<Array<Transaction>>(URI.base + URI.getAllTransactions);
  }
}