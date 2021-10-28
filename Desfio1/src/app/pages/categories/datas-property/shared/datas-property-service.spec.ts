import { ComponentFixture, TestBed } from '@angular/core/testing';
import{ DatasPropertyService} from './datas-property-service';

describe('DatasPropertyService', () => {
// vc faz uma varial e coloca um valor do seu component impotado
let service: DatasPropertyService;

beforeEach(() => {
//depois vc pega a varial q no meu caso chama de "service" e coloca um New , e o comp impotado com "()""
  service = new DatasPropertyService()
})
it('should have no value to strat', () =>{
    service = new DatasPropertyService();

    expect(service.valorDaEntrada.length).toBe(0);

})
it( 'should have dados in enviaDados' , () => {
  //deppois vc pega esse mesma varial e em seguida é só colocar "um ponto" que já aparece os metodos disponivel 
  //que vc tem no seu comp importado em cima.

  service.enviaDados;
// ai é do colocar um expect e chamar a função que vc desejar 
   expect(service.enviaDados).toMatch('dados');

})

})