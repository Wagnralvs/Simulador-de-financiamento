import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Service } from '../results/shared/service';
import{ DatasPropertyService} from './datas-property-service';

describe('DatasPropertyService', () => {

let service: DatasPropertyService;

beforeEach(() => {
  service = new DatasPropertyService()
})
it('should have no value to strat', () =>{
    service = new DatasPropertyService();

    expect(service.valorDaEntrada.length).toBe(0);

})
it( 'should have dados in enviaDados' , () => {
 let dados : any = '' ;
 // spyOn(window , "");
  service.enviaDados;

   expect(service.enviaDados).toMatch('dados');
   expect(service.enviaDados).toBeTruthy();


})

})