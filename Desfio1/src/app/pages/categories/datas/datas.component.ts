import { Component, Injectable, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup,MinLengthValidator,Validators , ValidatorFn} from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from 'src/app/app.component';
import { DatasPropertyComponent } from '../datas-property/datas-property.component';


@Component({
  selector: 'app-dadas',
  templateUrl: './datas.component.html',
  styleUrls: ['./datas.component.css'],
  
})
@Injectable()
export class DatasComponent implements OnInit {
 
  public patterns ='^[a-zA-Z ]*$';
  submitted = false ;

  formulario: FormGroup = new FormGroup({
    nome: new FormControl(null) ,
    profissao: new FormControl (null),
    cpf : new FormControl (null), 
    dataNascimento: new FormControl(null),
    cep: new FormControl(null),
    telefone: new FormControl(null),
    })  

  constructor() { }

  usuario: any ={
  
  }

  ngOnInit(): void {
    this.usuario={};
  }

  onSubmit(form: any){
   // console.log(form);
  // alert('Formulário enviado com sucesso!')
this.submitted = true
   
  }

}
