import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../datas-property/results/shared/service';
import { DatasPropertyService } from '../datas-property/shared/datas-property-service';


@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.css']
})
export class HistoricComponent implements OnInit {

 
  data = "02/05/2021";
  valorImovel: any ="";
 
  dadosBD!: Service;
  historics: Service[] = [];

  constructor(private service: DatasPropertyService, private router:Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    // inicializando a exibição do banco de dados
    this.service.receberBD().subscribe(historics => {
      this.historics = historics
      console.log(historics)
    })

    //this.route.snapshot.paramMap.get('id');
    const id = '3'
    this.service.pegarId(id).subscribe((dadosBD) => {
      this.dadosBD = dadosBD;
    })
  }

  delete(): any{
   // const id = '1'
   this.service.deletarBD(this.dadosBD.id).subscribe(() => {
     alert('historico excluido com sucesso !')
   } )

}}
