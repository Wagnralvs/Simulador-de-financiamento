import { Component,NgModule, OnInit, Input,Output, Injectable ,EventEmitter} from '@angular/core';
import {AbstractControl, NgForm,FormsModule, FormControl, FormGroup, Validators , FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

import { DatasComponent } from '../datas/datas.component';
import { AppComponent } from 'src/app/app.component';
import { ResultsComponent } from './results/results.component';
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

  private aprovado!: Service;
  private DatasPropertyService !: DatasPropertyService;
 //formulario: FormGroup;

  valorImovel= '';
  ValorEntrada = '';

  conteudoSalvo: any;
  quantidadeParcelas: any;
  rendaMensal:any;

  submitted = false

// Capituar dados do input
   onKeyup0(event:any){
   // console.log(event)
  }
    onKeyup(event:any){
    //  console.log(event)
    }
    onKeyup2(event:any){
     // console.log(event)
    }

    onSave0(valor:number){
      this.rendaMensal= valor
    }
    onSave(valor:number){
this.conteudoSalvo = valor
return valor
}
    onSave2(valor:string){
      this.quantidadeParcelas = valor
  }

  /*renda(): boolean{
  
    let x: number = (this.rendaMensal * 0.3 );
    let y: number = this.parcelas() ;
    let w : number = this.rendaMensal;

    console.log()

    if( y  >=  x){
        return false;
    }
    else(y < x)
      return true
    } */
  

 entrada(): number {
      
     let x = 0.20;
     let y:number = this.conteudoSalvo   ;
       const total  = x * y  ;
    
    console.log(total)

    return total 
    }
    
    get entradaValor(){
return this.entrada;
    }

    parcelas(){
      let x = this.conteudoSalvo;
      let y = this.quantidadeParcelas;

      const total = (x * 0.80/ y)* 1.058 ;
      return total
    }
    
    valorAprovado() {
      
      let x = 0.80;
      let y:number = this.conteudoSalvo   ;
        const total  = x * y  ;
     return total
     }

     formulario = this.formBuilder.group({
      TipoDeImovel:[null,[Validators.required]],
     rendaMensal: [null ,[Validators.required, Validators.maxLength(4), Validators.max(4)]],
     valorImovel: [null,[Validators.required]], 
      ValorDaEntrada: [null,[Validators.required]],
     quantidadePacelas: [null, [Validators.required , Validators.max(3)]],
     parcelas: new FormControl(null, [Validators.required]) 
      })

  constructor(private service:DatasPropertyService,private formBuilder:FormBuilder) {
    
   }

  usuario: any ={
  
  }

  ngOnInit(): void {
    this.usuario={};
    console.log("total");
    
 //this.criarFormulario();
     
  }
 


  onSubmit(form: any){
   // console.log(form);
  //  console.log(this.usuario);
   // console.warn(this.formulario.value);
   this.submitted = true
  }
 

  //---------testes-------------
 encaminhoAprovado() {
   // this.DatasPropertyService.enviaDados(this.aprovado);

  }
 //encaminhaReprovado(){}

  validarDados(){
    alert("Solicitação enviada com sucesso!");
   // alert(this.ValorDoImovel);
   
     // this.service.valorDoImovel=this.formulario.get("ValorDoImovel");
   //   this.service.valorDoImovel=this.formulario.controls["ValorDoImovel"].value;
   //   debugger
  //    this.encaminhoAprovado();
  //  } 
  //  else this.encaminhaReprovado();
  }

}
