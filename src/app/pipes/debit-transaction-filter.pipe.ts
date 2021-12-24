import { Pipe, PipeTransform } from '@angular/core';
import { CreditTransaction } from '../models/CreditTransaction';
import { DebitTransaction } from '../models/DebitTransaction';
import { Transaction } from '../models/Transaction';
import { TransactionType } from '../models/TransactionType';

@Pipe
({
  name: 'debitTransactionFilter'
})
export class DebitTransactionFilterPipe implements PipeTransform
{
  transform(transactions: Array<Transaction>): Array<DebitTransaction>
  {
    return transactions.filter(transaction => TransactionType.DEBIT == transaction.transactionType)
                       .map(transaction => transaction as DebitTransaction);
  }
}