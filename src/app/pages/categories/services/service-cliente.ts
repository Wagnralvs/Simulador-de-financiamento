import {  Injectable, } from '@angular/core';

import { ModalCliente } from '../modal/modal-cliente';
import { DatasComponent } from '../datas/datas.component';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn:"root"
})

export class ServiceCliente {

  static model: ModalCliente;
  public dadosclientes$ : Subject<ModalCliente>;

  constructor() {
     this.dadosclientes$ = new Subject<ModalCliente>();
  }

  pegarDadosCliente(): Observable<ModalCliente> {
    return this.dadosclientes$.asObservable();
  }

 enviarDadosCliente(dados: ModalCliente): void{
    this.dadosclientes$.next(dados);
  }
 }
