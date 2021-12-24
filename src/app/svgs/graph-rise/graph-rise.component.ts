import { Component, Input } from '@angular/core';

@Component
({
  selector: 'svg-graph-rise',
  templateUrl: './graph-rise.component.html'
})
export class GraphRiseComponent
{
  @Input()
  style: string = "w-6 h-6 fill-current text-black";
}