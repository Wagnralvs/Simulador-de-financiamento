import { Component, Injectable, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators , ValidatorFn ,  FormBuilder, } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from 'src/app/app.component';
import { DatasPropertyComponent } from '../datas-property/datas-property.component';
import { Router } from '@angular/router';
import { DatasPropertyService } from '../datas-property/shared/datas-property-service';
import { Service } from '../datas-property/results/shared/service';


@Component({
  selector: 'app-dadas',
  templateUrl: './datas.component.html',
  styleUrls: ['./datas.component.css'],
  
})
@Injectable()
export class DatasComponent implements OnInit {
 
  
  formulario!: FormGroup;
  name: any ='';
  private Model!:Service;
  

  constructor(private fb : FormBuilder , private router:Router, private service:DatasPropertyService) { }

  

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

 this.nomeEnviar();
  
  }
  nomeEnviar(){
this.name = this.formulario.get('name')?.value
let name = this.name;

this.Model = new Service(name, name , name , name );
this.service.enviaDados(this.Model)
  }

}
