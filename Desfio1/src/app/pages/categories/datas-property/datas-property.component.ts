import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DatasComponent } from '../datas/datas.component';
import { AppComponent } from 'src/app/app.component';
import { ResultComponent } from '../result/result.component';

@Component({
  selector: 'app-datas-property',
  templateUrl: './datas-property.component.html',
  styleUrls: ['./datas-property.component.css']
})


export class DatasPropertyComponent implements OnInit {
  
  

  ValorDoImovel= 10000;
  ValorDaEntrada = 50 ;

  conteudoSalvo : any;


  formulario: FormGroup = new FormGroup({
    TipoDeImovel: new FormControl('', [Validators.required,]) ,
    RendaMensal: new FormControl (null),
    ValorDoImovel : new FormControl (null), 
    ValorDaEntrada: new FormControl(null),
    QuantidaDePacelas: new FormControl('', [Validators.required, Validators.max(360)]),
    Celular: new FormControl(null),
    })  //

    onKeyup(event:any){
      console.log(event)
    }

    onSave(valor:string){
this.conteudoSalvo = valor
    }

    entrada() {
      
    
     let x = 0.20;
     let y = this.conteudoSalvo  ;
       const total  = x * y  ;
    return total
   
    }


  constructor() { }

  

  usuario: any ={
    nome: '',
     email: '',
   }

  ngOnInit(): void {
    this.usuario={};

    console.log("total")
  }
  onSubmit(form: any){
    console.log(form);

    console.log(this.usuario);

    //test

    
  }

}
