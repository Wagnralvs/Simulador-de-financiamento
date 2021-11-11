import { Component, OnInit,  Injectable , } from '@angular/core';
import { FormGroup, Validators , FormBuilder, } from '@angular/forms';
import { Router } from '@angular/router';

import { Service } from './results/shared/service';
import { DatasPropertyService } from './shared/datas-property-service';



@Component({
  selector: 'app-datas-property',
  templateUrl: './datas-property.component.html',
  styleUrls: ['./datas-property.component.css'],
  providers: [DatasPropertyService],

})

@Injectable()
export class DatasPropertyComponent implements OnInit {

  private Model!: Service;
  formulario!: FormGroup;

  menssage : any ='';
  Serv: any;


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

let parcelas:any = this.parcelas();
let valorAprovado: any = this.valorAprovado();
let quantidadeParcelas : any = this.formulario.get('quantidadeParcelas')?.value


valido = this.renda();

if(valido) {
 // envio de dados para o Service
this.Model = new Service (parcelas , valorAprovado , quantidadeParcelas , quantidadeParcelas );
 this.service.enviaDados(this.Model);


  this.aprovado();
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
              private formBuilder:FormBuilder,
              private router: Router) {
    
   }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
     tipoImovel:[null,[Validators.required]],
     rendaMensal: [null ,[Validators.required,]],
     valorImovel: [null,[Validators.required]], 
     valorEntrada: [null,[Validators.required,  ]],
     quantidadeParcelas: [null, [Validators.required , Validators.max(360), Validators.min(1) ]],
     
      })
   
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
