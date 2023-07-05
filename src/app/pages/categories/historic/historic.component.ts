import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DadosClienteImovelModel } from '../modal/model-imovel';
import { DatasPropertyService } from '../services/datas-property-service';
import { filter, map, take, tap, toArray, pipe, from, window } from 'rxjs';


@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.css']
})
export class HistoricComponent implements OnInit {


  data = "02/05/2021";
  valorImovel: any ="";

  dadosBD!: DadosClienteImovelModel;
  historics: DadosClienteImovelModel[] = [];
  historicById: DadosClienteImovelModel []=[];
  id : number ;

  constructor(private service: DatasPropertyService,
              private router:Router,
              ) { }

  ngOnInit(): void {

    // inicializando a exibição do banco de dados
    this.service.receberBD().pipe(
      tap((historic)=>{
        from(historic).pipe(
          take(5),
          toArray(),
              tap((res)=>{
                this.historics = res ;
          })
        ).subscribe()})
    ).subscribe();

    //this.route.snapshot.paramMap.get('id');
    const id:any = this.dadosBD.id
    this.service.pegarId(id).subscribe(dadosBD => {
      this.dadosBD = dadosBD;
    })
  }

  pegarDados(id: number){

  from(this.historics).pipe(
     filter(res => res.id == id),
  ).subscribe(
    (response)=>{
       const idClient = {response}
      const array = Object.values(idClient);
      this.historicById = array ;
    }
  );
  }

  pegarIdExcluiir(id:number): number{
     this.id = id ;
      return id ;
  }
  delete(): void{
   const id = this.id ;
   this.service.deletarBD(id).pipe(
    tap((result) => {
      if(result){
        alert('histórico apagado com sucesso');
        this.router.navigate(["/historic"]);
        location.reload();
      }
    } )

   ).subscribe();

}}
