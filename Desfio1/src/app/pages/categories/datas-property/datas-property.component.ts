import { Component,NgModule, OnInit, Input,Output, Injectable ,EventEmitter, ViewChild} from '@angular/core';
import {AbstractControl, NgForm,FormsModule, FormControl, FormGroup, Validators , FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

//import { NgxMaskModule} from 'ngx-mask';
//import { DatasComponent } from '../datas/datas.component';
//import { AppComponent } from 'src/app/app.component';
import { ResultsComponent } from './results/results.component';
import { ResultReprovadoComponent } from './result-reprovado/result-reprovado.component';
import { Service } from './results/shared/service';
import { DatasPropertyService } from './shared/datas-property-service';
import { invalid } from '@angular/compiler/src/render3/view/util';


@Component({
  selector: 'app-datas-property',
  templateUrl: './datas-property.component.html',
  styleUrls: ['./datas-property.component.css'],
  providers: [DatasPropertyService],

})

@Injectable()
export class DatasPropertyComponent implements OnInit {
  @ViewChild(ResultsComponent) child:ResultsComponent | any;

  private Model!: Service;
 // private DatasPropertyService !: DatasPropertyService;
  //private Imovel! : number;
  formulario!: FormGroup;

  
  menssage : any ='';
  valorImovel= '';
  ValorEntrada = '';

  conteudoSalvo: any;
  quantidadeParcelas: any;
  rendaMensal:any;

  submitted = false
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
}
entradaValidacao(): boolean{
  let x: number = this.entrada();
  let y: number =this.formulario.get('valorEntrada')?.value
   
 
  if(x > y ) {
  
    //this.menssage = false;
    //this.menssage = 'O valor da entrada não pode ser inferior a 20% do imóvel'
    return false
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


valido = this.renda();

if(valido) {
 // debugger
this.Model = new Service (parcelas , valorAprovado );
 this.service.enviaDados(this.Model);
// this.service.enviaDados(valorAprovado);
// console.log(this.service.enviaDados)

//this.service.parcelaInicial = this.parcelas()

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
     valorEntrada: [null,[Validators.required, ]],
     quantidadeParcelas: [null, [Validators.required , Validators.max(360), Validators.min(1) ]],
     
      })
   
  
  }
  /*customizarValidacao(control: FormControl ){

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
   //alert(this.entrada())
   console.log(this.formulario);
   console.log(this.formulario.value)

 
   this.service.valorImovel = this.formulario.get('valorImovel')?.value
     // this.service.valorImovel=this.formulario.get("valorImovel");
  //  this.service.valorImovel=this.formulario.controls["valorImovel"].value;
   //   debugger
  }
  // --- resulatdo = aprovado /reprovado
 reprovado(){
  this.router.navigate(['/reprov'])
 }
 aprovado() {
  this.router.navigate(['/results'])

  

  }

  //---------testes-------------
     // this.service.valorDoImovel=this.formulario.get("valorImovel");
   //   this.service.valorDoImovel=this.formulario.controls["valorImovel"].value;
   //   debugger } 


}
