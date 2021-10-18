import { Component, OnInit, Input, Output, NgModule } from '@angular/core';
import { DatasPropertyComponent } from '../datas-property/datas-property.component';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  taxa= 7;
  parcelaInicial= 0 ;
  valorAprovado = 0 ;
 
  reprovado: string[]  = [];
  
  
 //@Input() nome : string ='angula';

  constructor() { }

  ngOnInit(): void {
  }

}
