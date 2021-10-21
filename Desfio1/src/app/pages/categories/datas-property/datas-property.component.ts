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

  //formulario!: FormGroup;

@ Input()financiamento: any;
 
setFinanciamento(financiamento: any) {
 // faz aqui de guardar na variável criada acima
 this.entrada = this.entrada ;
}
 getFinanciamento(): any {
 // retorna o valor que foi atribuído antes
 return this.entrada
}

  ValorDoImovel= '';
  ValorDaEntrada = '';

  conteudoSalvo : any;
  quantidadeParcelas: any;
  rendaMensal:any;

  

 // formulario: FormGroup = new FormGroup({
 //   TipoDeImovel: new FormControl(null) ,
 //   RendaMensal: new FormControl (null),
//    ValorDoImovel: new FormControl (""), 
 //   ValorDaEntrada: new FormControl(""),
 //   quantidadePacelas: new FormControl(null, [Validators.required , Validators.max(3)]),
 //  parcelas: new FormControl(null, [Validators.required])   
   // })

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
  //  let aprovado: boolean = true;
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
    nome: '',
     email: '',
  }

  ngOnInit(): void {
    this.usuario={};
    console.log("total");
    
 this.criarFormulario();
     
  }
  criarFormulario(){
  this.formulario = this.formBuilder.group({
     TipoDeImovel:[null,[Validators.required]],
      RendaMensal: [null ,[Validators.required, Validators.maxLength(4)]],
      ValorDoImovel: [null,[Validators.required]], 
     ValorDaEntrada: [null,[Validators.required]],
     quantidadePacelas: [null, [Validators.required , Validators.max(3)]],
     parcelas: new FormControl(null, [Validators.required]) 
     })}
 // get ValorDoImovel() {
 //   return this.formulario.get('ValorDoImovel');}

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
    alert("ola mundo;");
    alert(this.ValorDoImovel);
    alert(this.entrada());

    //alert(this.formulario);

 //   let valido: boolean = true;
   // this.mensagem = "";
  //  this.validaValorEntrada();

   // valido = this.validaPrestacao();

  //  if (valido){
     
     
     // this.service.valorDoImovel=this.formulario.get("ValorDoImovel");
   //   this.service.valorDoImovel=this.formulario.controls["ValorDoImovel"].value;
   //   debugger
  //    this.encaminhoAprovado();
  //  } 
  //  else this.encaminhaReprovado();
  }

}
