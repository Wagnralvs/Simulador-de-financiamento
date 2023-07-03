import {  Injectable, } from '@angular/core';

import { ModalCliente } from '../modal/modal-cliente';
import { DatasComponent } from '../datas/datas.component';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn:"root"
})

export class ServiceCliente {

  static model: ModalCliente;
  private dadosclientes$ = new  Subject<any>();

  constructor() {
  //  this.dadosclientes$ = new Subject();
  }

  pegarDadosCliente(): Observable<any> {debugger
    return this.dadosclientes$.asObservable();
  }

 enviarDadosCliente(dados: ModalCliente): void{
    this.dadosclientes$.next(dados);
  }
 }
