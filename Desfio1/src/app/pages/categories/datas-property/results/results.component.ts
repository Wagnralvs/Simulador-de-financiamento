import { Component, Input, OnInit } from '@angular/core';
import { DatasPropertyComponent } from '../datas-property.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() nome : number =0;
  @Input() ValorDoImovel = 0;
  @ Input()counter = 0;
  //@Input() entrada: any;

  taxa= 7;
  parcelaInicial = '' ;
  valorAprovado = '' ;
 
  reprovado: string[]  = [];

  constructor() { }

  ngOnInit(): void {
  }

}
