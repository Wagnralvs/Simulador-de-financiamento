import { Component, Inject,  OnInit } from '@angular/core';
import { Validators , UntypedFormGroup ,  UntypedFormBuilder, } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalCliente } from '../modal/modal-cliente';
import { ServiceCliente } from '../services/service-cliente';

@Component({
  selector: 'app-dadas',
  templateUrl: './datas.component.html',
  styleUrls: ['./datas.component.css'],

})
@Inject({})
export class DatasComponent implements OnInit {

  public formulario: UntypedFormGroup;
  public name ='';

  public visualizar: boolean ;
  public clienteDados :ModalCliente ;
  public visualizarModel = false ;

  constructor(private fb : UntypedFormBuilder , private router:Router, private service:ServiceCliente) {
     this.visualizar = true ;
  }

  ngOnInit(): void {

   this.formulario = this.fb.group({
     nome:  [null ,[Validators.required , Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]  ],
     profissao :[null , [Validators.required,  Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]],
     cpf :[null , [Validators.required , Validators.minLength(14)] ],
     email :[null , [Validators.required,  Validators.email]],
     cep :[null , [Validators.required, Validators.minLength(9)]],
     celular :[null , [Validators.required, Validators.minLength(17)]],
   })
  }

onSubmit(){
 let nome = this.formulario.get('nome')?.value;
 let profissao = this.formulario.get('profissao')?.value;
 let cpf = this.formulario.get('cpf')?.value;
 let email = this.formulario.get('email')?.value;
 let data = new Date().getDate().toString();
 let cep = this.formulario.get('cep')?.value;
 let celular = this.formulario.get('celular')?.value;


 this.clienteDados = new ModalCliente (nome , profissao , cpf, email,  data , cep , celular,);
 this.service.dadosclientes$.next(this.clienteDados);
 this.visualizarModel = true;
 this.visualizar = false;
 this.router.navigate(['/property'] )
  }

}
