import { ComponentFixture, TestBed } from '@angular/core/testing';
import{ DatasPropertyService} from './datas-property-service';

describe('DatasPropertyService', () => {
let service: DatasPropertyService;

//let fixture: ComponentFixture<DatasPropertyService>;
//let component: DatasPropertyService;

beforeEach(() => {
  //  fixture = TestBed.createComponent(DatasPropertyService);
  //  component = fixture.componentInstance;
  //   fixture.detectChanges();
})
it('should have no value to strat', () =>{
    service = new DatasPropertyService();

    expect(service.valorDaEntrada.length).toBe(0);

})
it( 'should' , () => {
   // fixture.componentInstance.enviaDados ;
  //  fixture.detectChanges();
 //   expect(fixture.componentInstance.enviaDados).toBe('');
})

})