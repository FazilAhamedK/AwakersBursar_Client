import { Component, Input } from '@angular/core';

@Component
({
  selector: 'svg-table',
  templateUrl: './table.component.html'
})
export class TableComponent
{
  @Input()
  style: string = "w-6 h-6 fill-current text-black";
}