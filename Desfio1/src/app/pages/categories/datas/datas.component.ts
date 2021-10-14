import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,MinLengthValidator,Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from 'src/app/app.component';
import { DatasPropertyComponent } from '../datas-property/datas-property.component';


@Component({
  selector: 'app-dadas',
  templateUrl: './datas.component.html',
  styleUrls: ['./datas.component.css']
})
export class DatasComponent implements OnInit {
//test
public customPatterns = { '0': { pattern: new RegExp('\[a-zA-Z\]')} };

  //text- formulario

  formulario: FormGroup = new FormGroup({
    Nome: new FormControl((null) ) ,
    Profissao: new FormControl (null),
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
