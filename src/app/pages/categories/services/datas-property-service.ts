import { Injectable, } from '@angular/core';
import { DadosClienteImovelModel } from '../modal/model-imovel';

import { DatasPropertyComponent } from '../datas-property/datas-property.component';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class  DatasPropertyService {
// testes
 valorImovel : any = '';
 valorEntrada :string[]= [];
//--------

  urlBD = " http://localhost:3000/historico"

  static dadosClienteModel: DadosClienteImovelModel;
  public clienteDados$: Subject<DadosClienteImovelModel>;

  constructor(private http:HttpClient) {
    this.clienteDados$ = new Subject<DadosClienteImovelModel>();
  }

  pegarDados(): Observable<DadosClienteImovelModel>{
    return this.clienteDados$.asObservable();
  }

 receberDados(dados: DadosClienteImovelModel): void {
       this.clienteDados$.next(dados)
   }

// test banco de dados
 criarBD(dados:DadosClienteImovelModel): Observable<DadosClienteImovelModel>{
     return this.http.post<DadosClienteImovelModel>(this.urlBD, dados)
 }

 receberBD(): Observable<DadosClienteImovelModel[]>{
     return this.http.get<DadosClienteImovelModel[]>(this.urlBD)
 }
pegarId(id: string): Observable<DadosClienteImovelModel>{
  const url = `${this.urlBD}/${id}`
  return this.http.get<DadosClienteImovelModel>(url)

}

 deletarBD(id: number): Observable<DadosClienteImovelModel>{
   const url = `${this.urlBD}/${id}`
  return  this.http.delete<DadosClienteImovelModel>(url).pipe();


 }

}
