import { Component, OnInit, Input,Output, Injectable ,EventEmitter} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

import { DatasComponent } from '../datas/datas.component';
import { AppComponent } from 'src/app/app.component';
import { ResultComponent } from '../result/result.component';
import { ResultsComponent } from './results/results.component';


@Component({
  selector: 'app-datas-property',
  templateUrl: './datas-property.component.html',
  styleUrls: ['./datas-property.component.css']
})

@Injectable()
export class DatasPropertyComponent implements OnInit {
//teste  -  enviar para outro componente

 // emitirValorCriado = new EventEmitter<number>();
//  getEntrada(){
//    return this.entrada}
//addEntrada(entrada:any){
//this.entrada.push(entrada);
//this.emitirValorCriado.emit(entrada)}
//---------------
@ Input()counter = 0;

  @Input() ValorDoImovel= 10000;
  ValorDaEntrada = 50 ;


  conteudoSalvo : any;
  quantidadeParcelas: any;

  
  nomeCurso : number = 55;

  formulario: FormGroup = new FormGroup({
    TipoDeImovel: new FormControl(null) ,
    RendaMensal: new FormControl (null),
    ValorDoImovel: new FormControl (null), 
    ValorDaEntrada: new FormControl(null),
    quantidadePacelas: new FormControl(null, [Validators.required , Validators.max(3)]),
   parcelas: new FormControl(null, [Validators.required])   
  })  //

    onKeyup(event:any){
      console.log(event)
    }
    onKeyup2(event:any){
      console.log(event)
    }


    onSave(valor:number){
this.conteudoSalvo = valor

    }

    onSave2(valor:string){
      
      this.quantidadeParcelas = valor
          }

    @Input() entrada() {
      
     let x = 0.20;
     let y:number = this.conteudoSalvo   ;
       const total  = x * y  ;
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



  constructor() { }

  

  usuario: any ={
    nome: '',
     email: '',
   }

  ngOnInit(): void {
    this.usuario={};
    console.log("total");

  }
  onSubmit(form: any){
    console.log(form);

    console.log(this.usuario);
  }
 

}
