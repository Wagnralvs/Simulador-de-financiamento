import { Component, OnInit,  Injectable , } from '@angular/core';
import { FormGroup, Validators , FormBuilder, } from '@angular/forms';
import { Router } from '@angular/router';

import { ServiceCliente } from '../datas/service-cliente/service-cliente';
import { ModalCliente } from '../datas/modal/modal-cliente';

import { Service } from './results/shared/service';
import { DatasPropertyService } from './shared/datas-property-service';



@Component({
  selector: 'app-datas-property',
  templateUrl: './datas-property.component.html',
  styleUrls: ['./datas-property.component.css'],
  providers: [DatasPropertyService , ServiceCliente],

})

@Injectable()
export class DatasPropertyComponent implements OnInit {

  private Model!: Service;
  private modelCliente! : ServiceCliente;
  formulario!: FormGroup;

  menssage : any ='';
  Serv: any;

  nome:any;
  profissao: any;
  email:any;
  cpf:any;
  data:any;
  cep:any;
  celular:any;

  //----data -------
  dataHoje: number = Date.now();
  id:any = '';


//  -----caclulos -----//
valorAprovado() {
      
  let x: any = this.formulario.get('valorEntrada')?.value;
  let y: any = this.formulario.get('valorImovel')?.value   ;
  let valorAprovado  = y - x  ;

  return valorAprovado
 }
 

 entrada() {
    
  let x = 0.20;
  let y:any  = this.formulario.get('valorImovel')?.value ;
  let total:any  = x * y  ;

  return total 
};

 entradaX = '';
entradaValidacao(){
  let x: number = this.entrada();
  let y: number =this.formulario.get('valorEntrada')?.value
  
  
 if(x > y ) {
  this.menssage = 'O valor da entrada não pode ser inferior a';
  this.entradaX = this.entrada();
    return   false 
  }
  
else return true 

}
   
  

parcelas(){
      let x: any =  this.formulario.get('valorImovel')?.value;
      let y: any = this.formulario.get('quantidadeParcelas')?.value;
      const total = (x * 0.80/ y)* 1.058 ;

      return total
    }

// -----caclulo validação-----
validacao() {
let valido:Boolean = true;

let tipoImovel = this.formulario.get('tipoImovel')?.value;
let rendaMensal = this.formulario.get('rendaMensal')?.value;
let valorImovel = this.formulario.get('valorImovel')?.value;
let valorEntrada = this.formulario.get('valorEntrada')?.value;
let quantidadeParcelas : any = this.formulario.get('quantidadeParcelas')?.value

let parcelas:any = this.parcelas();
let valorAprovado: any = this.valorAprovado();
let dataHoje = this.dataHoje;
let id = this.id;

// test service cliente

let nome = this.nome;
let profissao = this.profissao;
let cpf = this.cpf;
let email = this.email;
let data = this.data;
let cep = this.cep;
let celular = this.celular;



valido = this.renda();

if(valido) {
 // envio de dados para o Service
this.Model = new Service (nome, profissao, cpf ,email, data, cep, celular ,
                          tipoImovel, rendaMensal, valorImovel , valorEntrada,
                          parcelas , valorAprovado , quantidadeParcelas , dataHoje , id);
 this.service.enviaDados(this.Model);

 // enviar dados para o banco de dados 
 this.service.criarBD(this.Model).subscribe(() => {
  this.aprovado()
 })


  //this.aprovado();
} 
else this.reprovado();
  
}


renda(): boolean{
  
  let x: number = (this.formulario.get('rendaMensal')?.value * 0.3 );
  let y: number = this.parcelas() ;

  if (  y  >  x){
      return false;
  }
   return true
  } 
  
  
constructor(private service:DatasPropertyService,
              private serviceCliente: ServiceCliente,
              private formBuilder:FormBuilder,
              private router: Router) {
    
   }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
     tipoImovel:[null,[Validators.required]],
     rendaMensal: [null ,[Validators.required,]],
     valorImovel: [null,[Validators.required]], 
     valorEntrada: [null,[Validators.required,  ]],
     quantidadeParcelas: [null, [Validators.required , Validators.max(360), Validators.min(1) ]]
     
      })

     //  seriço extraido do componente Cliente
      this.nome = ServiceCliente.model.nome;
      this.profissao = ServiceCliente.model.profissao;
      this.cpf = ServiceCliente.model.cpf;
      this.email = ServiceCliente.model.email;
      this.data = ServiceCliente.model.data;
      this.cep = ServiceCliente.model.cep;
      this.celular = ServiceCliente.model.celular;


  }
   /*  entradaValidacaoTest (control: FormControl){
    let parcelas = this.formulario.get('valorimovel')?.value * 0.20;
    let value = this.formulario.get('valorEntrada')?.value;
    if (value < parcelas ){
        return {entradaValor: false}
    }
    return null;
}
customizarValidacao(control: FormControl ){

    let x:any =this.formulario.get('valorImovel')?.value;
    let y = this.entrada();

   // return ( valorEntrada.value <= this.entrada?);
   if (x <= y) {
     return false ? null:{ string : 'entrada menor'}
   }
   return true

  }*/


  onSubmit(){
   
   this.validacao();
   
   console.log(this.formulario);
   console.log(this.formulario.value)

 
  }
  // --- rotas = aprovado /reprovado
 reprovado(){
  this.router.navigate(['/reprov'])
 }
 aprovado() {
  this.router.navigate(['/results'])

  }

}
