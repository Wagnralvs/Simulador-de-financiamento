import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

import { DatasPropertyComponent, RequestAprovadoModel } from '../datas-property/datas-property.component';
import { DatasPropertyService } from '../services/datas-property-service';
import { DadosClienteImovelModel } from '../modal/model-imovel';
import { tap, Subscription } from 'rxjs';
import { ServiceCliente } from '../services/service-cliente';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnChanges {

  @Input() requestAprovado :RequestAprovadoModel ;
  @Input() visualizar = false

  taxa:number;
  totalParcelaInicial= '';
  totalValorAprovado= '';
  valorTotalImovelJuros = '';

  constructor() {
  }

  ngOnChanges(): void {
  this.taxa = this.requestAprovado.taxa
  this.totalParcelaInicial = this.requestAprovado.totalParcelaInicial.toLocaleString('pt-BR', { maximumFractionDigits: 2 });
  this.totalValorAprovado = this.requestAprovado.totalValorAprovado.toLocaleString('pt-BR', { maximumFractionDigits: 2 });
  this.valorTotalImovelJuros = this.requestAprovado.valorTotalImovelJuros.toLocaleString('pt-BR', { maximumFractionDigits: 2 })
  }

}
