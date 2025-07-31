import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import db from 'src/assets/db.json';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiMockAngularInMemoryWebApiService implements InMemoryDbService {

  constructor() { }
    createDb() {
    return {
      historico: (db as any).historico,
    };
  }

   genId(chamados: any[]): number {
    return chamados.length > 0 ? Math.max(...chamados.map(c => c.id)) + 1 : 1;
  }
}
