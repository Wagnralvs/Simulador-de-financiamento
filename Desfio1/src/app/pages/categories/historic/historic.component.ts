import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DadosClienteImovelModel } from '../modal/model-imovel';
import { DatasPropertyService } from '../services/datas-property-service';
import { filter, map, take, tap, toArray, pipe, from } from 'rxjs';


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


      // const array$ = from(Object.entries(res));
      //   array$.subscribe(array => { debugger
      //     console.log(array)
      //     this.historicById = array
      //   });

      //  this.historicById = new DadosClienteImovelModel(
      //     res )
      //  debugger

  ).subscribe(
    (response)=>{debugger
       const idClient = {response}
      // for (const key in response){
      //   this.historicById.push(response[key]);

      //   console.log(this.historicById)
      // }

      const array = Object.values(idClient);
      console.log(array)
    }
  );

  }
  delete(): any{

   this.service.deletarBD(this.dadosBD.id).subscribe(() => {
     //alert('historico excluido com sucesso !');
     this.router.navigate(["/historic"]);
   } )

}}
