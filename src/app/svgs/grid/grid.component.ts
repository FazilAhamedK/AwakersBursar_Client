import { Component, Input } from '@angular/core';

@Component
({
  selector: 'svg-grid',
  templateUrl: './grid.component.html'
})
export class GridComponent
{
  @Input()
  style: string = "w-6 h-6 fill-current text-black";
}