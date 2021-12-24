import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionService } from './transaction/transaction.service';
import { CreditTransactionFilterPipe } from './pipes/credit-transaction-filter.pipe';
import { CreditTransactionsTableComponent } from './transaction/credit/tableView/credit-transactions-table.component';
import { DebitTransactionFilterPipe } from './pipes/debit-transaction-filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './svgs/table/table.component';
import { GridComponent } from './svgs/grid/grid.component';
import { GraphRiseComponent } from './svgs/graph-rise/graph-rise.component';
import { GraphFallComponent } from './svgs/graph-fall/graph-fall.component';

@NgModule
({
  declarations:
  [
    AppComponent,
    DashboardComponent,
    TransactionComponent,
    CreditTransactionsTableComponent,
    CreditTransactionFilterPipe,
    DebitTransactionFilterPipe,
    TableComponent,
    GridComponent,
    GraphRiseComponent,
    GraphFallComponent
  ],
  imports:
  [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers:
  [
    TransactionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule
{ }