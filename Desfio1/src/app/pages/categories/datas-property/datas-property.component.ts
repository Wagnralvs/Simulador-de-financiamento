import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DatasComponent } from '../datas/datas.component';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-datas-property',
  templateUrl: './datas-property.component.html',
  styleUrls: ['./datas-property.component.css']
})
export class DatasPropertyComponent implements OnInit {

  formulario: FormGroup = new FormGroup({
    TipoDeImovel: new FormControl(null) ,
    RendaMensal: new FormControl (null),
    CPF : new FormControl (null), 
    DataDeNascimento: new FormControl(null),
    CEP: new FormControl(null),
    Celular: new FormControl(null),
    })  //


  constructor() { }

  usuario: any ={
    nome: '',
     email: '',
   }

  ngOnInit(): void {
    this.usuario={};
  }
  onSubmit(form: any){
    console.log(form);

    console.log(this.usuario);

    //test

    
  }

}
