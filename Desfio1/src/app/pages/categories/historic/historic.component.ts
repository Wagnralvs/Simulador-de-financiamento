import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.css']
})
export class HistoricComponent implements OnInit {

  nome= "Wagner Alves Viana";
  data = "02/05/2021";
  valorImovel="100.000,00";
  parcelas="360";


  hitoric : [] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    alert('você deseja exclir !')
  }

}
