import { Component, Input, OnInit } from '@angular/core';
import { Service } from '../datas-property/results/shared/service';
import { DatasPropertyService } from '../datas-property/shared/datas-property-service';


@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.css']
})
export class HistoricComponent implements OnInit {

  nome= "Wagner Alves Viana";
  data = "02/05/2021";
  valorImovel: any ="";
  parcelas="360";


  hitoric:any  = '';
  cliente: Service[] = [];

  constructor(private service: DatasPropertyService) { }

  ngOnInit(): void {
  //  this.hitoric = this.service.consultar();
    this.valorImovel = localStorage.getItem(JSON.parse('846.4000000000001'))
  }

  delete(): any{
    //alert('você deseja exclir !')
  }

}
