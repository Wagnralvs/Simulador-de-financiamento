import { Component, OnInit, Input,Output, Injectable ,EventEmitter} from '@angular/core';
import { FormControl, FormGroup, Validators , FormBuilder} from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { DatasComponent } from '../datas/datas.component';
import { AppComponent } from 'src/app/app.component';
import { ResultsComponent } from './results/results.component';
import { Service } from './results/shared/service';
import { DatasPropertyService } from './shared/dastas-property-service';


@Component({
  selector: 'app-datas-property',
  templateUrl: './datas-property.component.html',
  styleUrls: ['./datas-property.component.css'],
  providers: [DatasPropertyService]
})

@Injectable()
export class DatasPropertyComponent implements OnInit {

  private aprovado!: Service;
  private DatasPropertyService !: DatasPropertyService;
  private router!: Router;
  public formulario!: FormGroup;


/*@ Input()financiamento: any;
 
setFinanciamento(financiamento: any) {

 this.entrada = this.entrada ;
}
 getFinanciamento(): any {

 return this.entrada
}*/

  valorImovel= '';
  ValorEntrada = '';

  conteudoSalvo : any;
  quantidadeParcelas: any;
  rendaMensal:any;

// Capituar dados do input
   onKeyup0(event:any){
    console.log(event)
  }
    onKeyup(event:any){
      console.log(event)
    }
    onKeyup2(event:any){
      console.log(event)
    }

    onSave0(valor:number){
      this.rendaMensal= valor
    }
    onSave(valor:number){
this.conteudoSalvo = valor
}
    onSave2(valor:string){
      this.quantidadeParcelas = valor
  }

  renda(): boolean{
  
    let x: number = (this.rendaMensal * 0.3 );
    let y: number = this.parcelas() ;
    let w : number = this.rendaMensal;

    console.log()

    if( y  >=  x){
        return false;
    }
    else(y < x)
      return true

      
    }
  



  @Input() entrada(): number {
      
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

  constructor(private service:DatasPropertyService,private formBuilder:FormBuilder) {
    
   }

  usuario: any ={
  
  }

  ngOnInit(): void {
    this.usuario={};
    console.log("total");
    
 this.criarFormulario();
     
  }
  criarFormulario(){
  this.formulario = this.formBuilder.group({
     TipoDeImovel:[null,[Validators.required]],
    rendaMensal: [null ,[Validators.required, Validators.maxLength(4)]],
    valorImovel: [null,[Validators.required]], 
     ValorDaEntrada: [null,[Validators.required]],
    quantidadePacelas: [null, [Validators.required , Validators.max(3)]],
    parcelas: new FormControl(null, [Validators.required]) 
     })}

  onSubmit(form: any){
    console.log(form);

    console.log(this.usuario);
  }
 

  //---------testes-------------
 encaminhoAprovado() {
   // this.DatasPropertyService.enviaDados(this.aprovado);

    this.router.navigate(['/results']);
  }
  encaminhaReprovado(){

  }
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
