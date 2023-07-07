import { Injectable, } from '@angular/core';
import { DadosClienteImovelModel } from '../modal/model-imovel';

import { DatasPropertyComponent } from '../datas-property/datas-property.component';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class  DatasPropertyService {

private urlBD = " http://localhost:3000/historico"
constructor(private http:HttpClient) {}

// banco de dados
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
