import {  Injectable, } from '@angular/core';
import { ModalCliente } from '../modal/modal-cliente';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { RequestAprovadoModel } from '../datas-property/datas-property.component';

@Injectable({
  providedIn:"root"
})

export class ServiceCliente {

  static model: ModalCliente;
  public dadosclientes$ = new BehaviorSubject<ModalCliente | null>(null);
  public requestApproveModel$ = new  BehaviorSubject<RequestAprovadoModel | null>(null)


  constructor() {}
 }
