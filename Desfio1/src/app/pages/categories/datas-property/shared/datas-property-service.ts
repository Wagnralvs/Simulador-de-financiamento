import { EventEmitter, Injectable, Input } from '@angular/core';
import { Service } from '../results/shared/service';


import { DatasPropertyComponent } from '../datas-property.component';

//import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})

export class DatasPropertyService {
// testes
 valorImovel : any = '';

 valorEntrada :string[]= [];
//--------


  static model: Service;

  constructor() { }

  enviaDados(dados: Service): any {
    DatasPropertyService.model = dados;
     // tests 
  //   localStorage.setItem(dados.parcelaInicial.toString(), JSON.stringify(dados)); 
     localStorage.setItem(dados.nome.toString(), JSON.stringify(dados)); 
  }

 receberDados(): Service {
    return DatasPropertyService.model; } 

   consultar(callback: any){
     //: Array<Service>
 // let cliente: Service[] = [];
     for (var i  = 0; i <localStorage.length; i++){
       callback(
   // localStorage.getItem(localStorage.key(i))
        
        )
       ;
    
    
}
//return cliente
}
}