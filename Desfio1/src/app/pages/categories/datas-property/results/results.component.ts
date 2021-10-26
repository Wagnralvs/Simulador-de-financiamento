import { Component, Input, OnInit } from '@angular/core';

import { DatasPropertyComponent } from '../datas-property.component';
import { DatasPropertyService } from '../shared/datas-property-service';
import { Service } from './shared/service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() nome : number =0;
   ValorDoImovel = '';
  @Input() entrada: string[]=[''];

  taxa= 7;
  parcelaInicial! : string ;
  valorAprovado! : string ;
 
 reprovado: string[]  = [];

  constructor(private service:DatasPropertyService) { }

  ngOnInit(): void {
    this.ValorDoImovel=this.service.valorDoImovel;
  // this.parcelaInicial = DatasPropertyService.model.parcelaInicial1.toLocaleString('pt-BR');
  }

}
