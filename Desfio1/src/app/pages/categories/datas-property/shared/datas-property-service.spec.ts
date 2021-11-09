import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Service } from '../results/shared/service';
import{ DatasPropertyService} from './datas-property-service';

describe('DatasPropertyService', () => {

let servico: DatasPropertyService;

beforeEach(() => {
  servico = new DatasPropertyService()

  TestBed.configureTestingModule({});
  servico = TestBed.inject(DatasPropertyService);
})// test 1
it('should enviarDados to be running ', () => {
 let Dados: Service = new Service(40000, 160000);

 servico.enviaDados(Dados);

 expect(Dados.parcelaInicial).toEqual(40000);
 expect(Dados.valorAprovado).toEqual(160000);
});
// test 2
it('should receberDados to be running ', () => {
  let Dados: Service = new Service(20000, 80000);
 
  servico.receberDados();
 
  expect(servico.receberDados).toBeTruthy()
  expect(Dados.parcelaInicial).toEqual(20000);
  expect(Dados.valorAprovado).toEqual(80000);

 });
// test 3 

it('should have no value to strat', () =>{
    servico = new DatasPropertyService();

    expect(servico.valorEntrada.length).toBe(0);

})


})