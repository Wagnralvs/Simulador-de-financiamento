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

 
 taxa = 7;
 totalParcelaInicial! : any ;
 totalValorAprovado! : any;
 
//private service:DatasPropertyService
  constructor() { }

  ngOnInit(): void {

  this.totalParcelaInicial = DatasPropertyService.model.parcelaInicial.toLocaleString("pt-BR");
  this.totalValorAprovado = DatasPropertyService.model.valorAprovado.toLocaleString("pt-BR");
  
  }
 

}
