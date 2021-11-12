import { Component, Injectable, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators , ValidatorFn ,  FormBuilder, } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from 'src/app/app.component';
import { DatasPropertyComponent } from '../datas-property/datas-property.component';
import { Router } from '@angular/router';
import { DatasPropertyService } from '../datas-property/shared/datas-property-service';
import { Service } from '../datas-property/results/shared/service';
import { ModalCliente } from './modal/modal-cliente';
import { ServiceCliente } from './service-cliente/service-cliente';

@Component({
  selector: 'app-dadas',
  templateUrl: './datas.component.html',
  styleUrls: ['./datas.component.css'],
  
})
@Injectable()
export class DatasComponent implements OnInit {
 
  
  formulario!: FormGroup;
  name: any ='';
  private Model!:ModalCliente;
  

  constructor(private fb : FormBuilder , private router:Router, private service:ServiceCliente) { }

  

  ngOnInit(): void {

   this.formulario = this.fb.group({
     nome:  [null ,[Validators.required , Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]  ],
     profissao :[null , [Validators.required,  Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]],
     cpf :[null , [Validators.required , Validators.minLength(14)] ],
     email :[null , [Validators.required,  Validators.email]],
     dataNascimento :[null , [Validators.required, Validators.max(2003)]],
     cep :[null , [Validators.required, Validators.minLength(9)]],
     telefone :[null , [Validators.required, Validators.minLength(17)]],
   })

  
  }

  onSubmit(){

  alert('Formulário enviado com sucesso!')
  this.router.navigate(['/property'])
 console.log(this.formulario);

 let nome = this.formulario.get('nome')?.value;
 let profissao = this.formulario.get('profissao')?.value;
 let cpf = this.formulario.get('cpf')?.value;
 let email = this.formulario.get('email')?.value;
 let data = this.formulario.get('data')?.value;
 let cep = this.formulario.get('cep')?.value;
 let celular = this.formulario.get('celular')?.value;


 // enviar service
 this.Model = new ModalCliente (nome , profissao , cpf, email,  data , cep , celular,);
 this.service.enviaDadosCliente(this.Model);

 //this.nomeEnviar();
  
  }
  nomeEnviar(){

  }

}
