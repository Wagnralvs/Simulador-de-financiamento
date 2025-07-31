import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ArcElement, Chart, ChartType, Legend, PieController, Title, Tooltip } from 'chart.js';
import { RequestAprovadoModel } from '../datas-property/datas-property.component';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements  OnChanges, OnInit {
 @Input() requestAprovado :RequestAprovadoModel ;
chartAtual: any;
 constructor(){
  Chart.register(PieController, ArcElement, Tooltip, Legend, Title);
}
ngOnInit(): void {
    this.chartPizza()
  }
  ngOnChanges(changes: SimpleChanges): void {
  }

   chartPizza(){
    if(this.chartAtual){
      this.chartAtual.destroy();
    }
  //      this.requestAprovado = {
  //        taxa : 5,
  // totalParcelaInicial : 1000,
  // valorTotalImovelJuros : 50000,
  //        totalValorAprovado : 10000,
  //    valorEntrada : 5000,
  //     juros :20000,

  //     }
    this.chartAtual =   new Chart("graficoImovel", {
        type: 'pie',
        data: {
          labels: ['Valor Real do Imóvel', 'Entrada do Imóvel', 'Juros Total do Imóvel'],
          datasets: [{
            label: 'Distribuição',
            data: [this.requestAprovado.totalValorAprovado, this.requestAprovado.valorEntrada, this.requestAprovado.juros], // <-- Altere esses valores conforme sua simulação
            backgroundColor: [
              '#36A2EB',  // Azul - Valor real
              '#4BC0C0',  // Verde claro - Entrada
              '#FF6384'   // Vermelho - Juros
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
            },
            title: {
              display: true,
              text: 'Composição do Financiamento do Imóvel'
            }
          }
        }
      });
    }
}
