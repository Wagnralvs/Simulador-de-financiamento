import { Component, OnInit } from '@angular/core';

import { DatasPropertyComponent } from '../datas-property/datas-property.component';
import { DatasPropertyService } from '../services/datas-property-service';
import { DadosClienteImovelModel } from '../modal/model-imovel';
import { tap } from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {


 taxa :number;
 totalParcelaInicial : string;
 totalValorAprovado: string;
 valorTotalImovelJuros: number

  constructor(private propedyServive: DatasPropertyService) { }

  ngOnInit(): void {debugger
 this.propedyServive.pegarDados().pipe(
  tap((dados) =>{ debugger
    this.totalParcelaInicial = dados.parcelaInicial.toLocaleString("pt-BR") ;
    this.totalValorAprovado = dados.valorAprovado.toLocaleString("pt-BR") ;
     this.valorTotalImovelJuros - dados.valortodalComJuros;
     this.taxa = dados.taxa;
  })
 ).subscribe()
  // this.totalParcelaInicial = DatasPropertyService..parcelaInicial.toLocaleString("pt-BR");
  // this.totalValorAprovado = DatasPropertyService.model.valorAprovado.toLocaleString("pt-BR");

  }


}
