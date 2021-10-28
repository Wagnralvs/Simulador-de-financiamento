import { EventEmitter, Injectable } from '@angular/core';
import { Service } from '../results/shared/service';

@Injectable({
  providedIn: 'root'
})

export class DatasPropertyService {

 valorDoImovel= '';
  valorDaEntrada :string[]= [];

  static model: Service;

  constructor() { }

  enviaDados(dados: Service) {
    DatasPropertyService.model = dados;
  }


  recuperaDados(): Service {
    return DatasPropertyService.model;
  } 
}