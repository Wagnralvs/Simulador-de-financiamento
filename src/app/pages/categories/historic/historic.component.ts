import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DadosClienteImovelModel } from '../modal/model-imovel';
import { DatasPropertyService } from '../services/datas-property-service';
import { filter, map, take, tap, toArray, pipe, from, window, Subscription } from 'rxjs';
import { RequestAprovadoModel } from '../datas-property/datas-property.component';
declare var bootstrap: any;

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.css']
})
export class HistoricComponent implements OnInit , OnDestroy, AfterViewInit {



  public valorImovel:string;
  public dadosBD: DadosClienteImovelModel;
  public historics: DadosClienteImovelModel[] = [];
  public historicById: DadosClienteImovelModel;
  public id : number ;
  private subscription: Subscription;
  loading = true;
  requestAprovado :RequestAprovadoModel
  viewChart = false;


  constructor(private service: DatasPropertyService,
              private router:Router,
     ) {
      this.subscription = new Subscription();
    }

  ngOnInit(): void {
    this.subscription.add(
    this.service.receberBD().pipe(
      tap((historic)=>{
        from(historic).pipe(
          toArray(),
              tap((res)=>{
                this.historics = res ;
                this.loading = false
          })
        ).subscribe()})
    ).subscribe())
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    // Inicializa todos os tooltips da página
    const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
//     const tooltipTriggerList:any = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  }

  getDataView(id: number){

  from(this.historics).pipe(
     filter(res => res.id == id),
  ).subscribe(
    (response)=>{
      this.historicById = response;
      this.requestAprovado = {
        taxa: this.historicById.taxa,
        totalParcelaInicial:this.historicById.parcelaInicial,
        valorTotalImovelJuros: this.historicById.valortodalComJuros,
        valorEntrada: this.historicById.valorEntrada,
        juros:  this.historicById.valortodalComJuros - this.historicById.valorAprovado,
        totalValorAprovado: this.historicById.valorAprovado
      }
    }
  );
  }

  pegarIdExcluiir(id:number): number{
     this.id = id ;
      return id ;
  }

  getChartView(id:number){
   this.getDataView(id);
   this.viewChart = true;
  }

  onCloseChart(){
    this.viewChart = false
    this.historicById = {} as any
  }

  delete(): void{
   const id = this.id ;
   this.loading = true;
   this.subscription.add(
    this.service.deletarBD(id).pipe(
      tap(() => {
        this.historics = this.historics.filter(item =>{
         return item.id !== id
        })
        this.loading = false
      })).subscribe());

}}
