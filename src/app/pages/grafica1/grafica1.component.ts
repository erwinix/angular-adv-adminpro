import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  @Input() title: string = 'Sin Titulo'
  labels1: string[] = ['Pan', 'Refresco', 'Tacos'];

  data1 = [
    [350, 450, 100],
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
