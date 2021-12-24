import { AccountType } from "./AccountType";
import { TransactionType } from "./TransactionType";

export interface Transaction
{
    transactionType: TransactionType,
    transactionID: number,
    dateOfTransaction: Date,
    amount: number,
    category: string,
    accountType: AccountType
}