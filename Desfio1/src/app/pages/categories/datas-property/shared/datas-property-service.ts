import { Injectable, } from '@angular/core';
import { Service } from '../results/shared/service';

import { DatasPropertyComponent } from '../datas-property.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class  DatasPropertyService {
// testes
 valorImovel : any = '';
 valorEntrada :string[]= [];
//--------

  urlBD = " http://localhost:3001/historico"

  static model: Service;

  constructor(private http:HttpClient) { }

  enviaDados(dados: Service): any {
    DatasPropertyService.model = dados;
     // tests localStorage
  // localStorage.setItem(dados.nome.toString(), JSON.stringify(dados)); 
  }

 receberDados(): Service {
    return DatasPropertyService.model; } 

// test banco de dados
 criarBD(dados:Service): Observable<Service>{
     return this.http.post<Service>(this.urlBD, dados)
 }

 receberBD(): Observable<Service[]>{
     return this.http.get<Service[]>(this.urlBD)
 }
pegarId(id: string): Observable<Service>{
  const url = `${this.urlBD}/${id}`
  return this.http.get<Service>(url)

}

 deletarBD(id: number): Observable<Service>{
   const url = `${this.urlBD}/${id}` 
  return  this.http.delete<Service>(url);


 }

}