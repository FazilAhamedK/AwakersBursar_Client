import { Pipe, PipeTransform } from '@angular/core';
import { CreditTransaction } from '../models/CreditTransaction';
import { Transaction } from '../models/Transaction';
import { TransactionType } from '../models/TransactionType';

@Pipe
({
  name: 'creditTransactionFilter'
})
export class CreditTransactionFilterPipe implements PipeTransform
{
  transform(transactions: Array<Transaction>): Array<CreditTransaction>
  {
    return transactions.filter(transaction => TransactionType.CREDIT == transaction.transactionType)
                       .map(transaction => transaction as CreditTransaction);
  }
}