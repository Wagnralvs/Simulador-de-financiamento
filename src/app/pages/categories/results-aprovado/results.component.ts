import { Component, OnInit } from '@angular/core';

import { DatasPropertyComponent } from '../datas-property/datas-property.component';
import { DatasPropertyService } from '../services/datas-property-service';
import { DadosClienteImovelModel } from '../modal/model-imovel';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {


 taxa = 7;
 totalParcelaInicial : string;
 totalValorAprovado: string;

  constructor(private propedyServive: DatasPropertyService) { }

  ngOnInit(): void {
 this.propedyServive.pegarDados().subscribe((dados)=>{
   this.totalParcelaInicial = dados.parcelaInicial.toLocaleString("pt-BR") ;
   this.totalValorAprovado = dados.valorAprovado.toLocaleString("pt-BR") ;
 })
  // this.totalParcelaInicial = DatasPropertyService..parcelaInicial.toLocaleString("pt-BR");
  // this.totalValorAprovado = DatasPropertyService.model.valorAprovado.toLocaleString("pt-BR");

  }


}
