import {  Injectable, } from '@angular/core';

import { ModalCliente } from '../modal/modal-cliente';
import { DatasComponent } from '../datas.component';

@Injectable({
  providedIn: 'root'
})

export class ServiceCliente {

  static model: ModalCliente;

  constructor() { }

  enviaDadosCliente(dados: ModalCliente): any {
    ServiceCliente.model = dados;
     // tests 
     localStorage.setItem(dados.nome.toString(), JSON.stringify(dados)); 
  
  }

 receberDadosCliente(): ModalCliente {
    return ServiceCliente.model; } 
 }