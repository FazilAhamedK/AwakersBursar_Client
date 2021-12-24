import { Transaction } from "./Transaction";
import { TransactionStatus } from "./TransactionStatus";

export interface CreditTransaction extends Transaction
{
    payorName: string,
    payorEmail: string,
    transactionStatus: TransactionStatus,
    verifiedBy: string,
    verifiedOn: Date
}