import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DadosClienteImovelModel } from '../modal/model-imovel';
import { DatasPropertyService } from '../services/datas-property-service';
import { filter, map, take, tap, toArray, pipe, from, window, Subscription } from 'rxjs';


@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.css']
})
export class HistoricComponent implements OnInit , OnDestroy{



  public valorImovel:string;
  public dadosBD: DadosClienteImovelModel;
  public historics: DadosClienteImovelModel[] = [];
  public historicById: DadosClienteImovelModel;
  public id : number ;
  private subscription: Subscription;
  loading = true;


  constructor(private service: DatasPropertyService,
              private router:Router,
     ) {
      this.subscription = new Subscription();
    }

  ngOnInit(): void {

    // inicializando a exibição do banco de dados
    this.subscription.add(
    this.service.receberBD().pipe(
      tap((historic)=>{
        from(historic).pipe(
          take(5),
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

  getDataView(id: number){

  from(this.historics).pipe(
     filter(res => res.id == id),
  ).subscribe(
    (response)=>{
      // const idClient = {response}
      //const array = Object.values(idClient);
      this.historicById = response ;
    }
  );
  }

  pegarIdExcluiir(id:number): number{
     this.id = id ;
      return id ;
  }
  delete(): void{
   const id = this.id ;
   this.subscription.add(
    this.service.deletarBD(id).pipe(
      tap((result) => {
        if(result){
          alert('histórico apagado com sucesso');
          this.router.navigate(["/historic"]);
          location.reload();
        }
      } )

     ).subscribe());

}}
