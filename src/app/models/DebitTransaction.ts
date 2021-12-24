import { Transaction } from "./Transaction";

export interface DebitTransaction extends Transaction
{
    particulars: Set<string>
}