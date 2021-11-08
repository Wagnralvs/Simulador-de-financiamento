import { Component, OnInit } from '@angular/core';

import { DatasPropertyComponent } from '../datas-property.component';
import { DatasPropertyService } from '../shared/datas-property-service';
import { Service } from './shared/service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

 

 valorImovel = '';
 taxa = 7;
 totalParcelaInicial! : any ;
 totalValorAprovado! : any;
 

  constructor() { }

  ngOnInit(): void {
    //this.valorImovel = DatasPropertyService.model.parcelaInicial
  //  this.valorImovel=this.service.valorImovel;
  this.totalParcelaInicial = DatasPropertyService.model.parcelaInicial.toLocaleString("pt-BR");
  // this.totalParcelaInicial = DatasPropertyService.model.parcelaInicial;
   this.totalValorAprovado = DatasPropertyService.model.valorAprovado.toLocaleString("pt-BR");

  //  this.totalParcelaInicial = DatasPropertyService.model.parcelaInicial.valueOf();  .toLocaleString("pt-BR")
  }
 

}
