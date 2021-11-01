import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Service } from '../results/shared/service';
import{ DatasPropertyService} from './datas-property-service';

describe('DatasPropertyService', () => {

let servico: DatasPropertyService;

beforeEach(() => {
  servico = new DatasPropertyService()

  TestBed.configureTestingModule({});
  servico = TestBed.inject(DatasPropertyService);
})
it('should service to be running ', () => {
 let Dados: Service = new Service(40000, 160000);

 servico.enviaDados(Dados);

 expect(Dados.parcelaInicial).toEqual(40000);
 expect(Dados.valorAprovado).toEqual(160000);
});


it('should have no value to strat', () =>{
    servico = new DatasPropertyService();

    expect(servico.valorDaEntrada.length).toBe(0);

})
it( 'should have dados in enviaDados' , () => {
 let dados : any = '' ;

  servico.enviaDados;

   expect(servico.enviaDados).toMatch('dados');
   expect(servico.enviaDados).toBeTruthy();


})

})