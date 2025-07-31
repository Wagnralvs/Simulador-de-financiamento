import {  Component, Input, OnInit } from '@angular/core';
import { RequestAprovadoModel } from '../datas-property/datas-property.component';
import { ServiceCliente } from '../services/service-cliente';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit  {

 requestAprovado :RequestAprovadoModel ;
  view = false

  taxa:number;
  totalParcelaInicial= '';
  totalValorAprovado= '';
  valorTotalImovelJuros = '';

  constructor(private clienteService:ServiceCliente) {}

  ngOnInit(): void {
    this.clienteService.requestApproveModel$.subscribe(
      data => {
        if(data){
          this.requestAprovado = data;
          this.taxa = data.taxa
          this.totalParcelaInicial = data.totalParcelaInicial.toLocaleString('pt-BR', { maximumFractionDigits: 2 });
          this.totalValorAprovado = data.totalValorAprovado.toLocaleString('pt-BR', { maximumFractionDigits: 2 });
          this.valorTotalImovelJuros = data.valorTotalImovelJuros.toLocaleString('pt-BR', { maximumFractionDigits: 2 });
          this.view = true;
        }
      }
    )
  }
}
