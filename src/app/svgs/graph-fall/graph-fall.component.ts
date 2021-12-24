import { Component, Input } from '@angular/core';

@Component
({
  selector: 'svg-graph-fall',
  templateUrl: './graph-fall.component.html'
})
export class GraphFallComponent
{
  @Input()
  style: string = "w-6 h-6 fill-current text-black";
}