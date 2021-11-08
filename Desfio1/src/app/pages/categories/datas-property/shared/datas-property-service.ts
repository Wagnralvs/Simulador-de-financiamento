import { EventEmitter, Injectable, Input } from '@angular/core';
import { Service } from '../results/shared/service';

import { DatasPropertyComponent } from '../datas-property.component';

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
     //this.valorImovel = Service;
  }


  receberDados(): Service {
    return DatasPropertyService.model; } 
}