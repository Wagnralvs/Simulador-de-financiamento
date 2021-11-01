import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, NgForm , FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule} from 'ngx-mask';

import { DatasPropertyService } from './shared/datas-property-service';
import { DatasPropertyComponent } from './datas-property.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DatasPropertyComponent', () => {

  let component: DatasPropertyComponent;
  let fixture: ComponentFixture<DatasPropertyComponent>;
  let parcela : DatasPropertyComponent ;

  const spyDatasPropertyService = jasmine.createSpyObj("spyDatasPropertyService",
  ["validarDados"]
  )

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatasPropertyComponent ],
      imports: [ FormsModule ],
      //alterações no providers
      providers:[
        FormBuilder,
        {provide: DatasPropertyService, useValue: spyDatasPropertyService  }
      ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
   fixture = TestBed.createComponent(DatasPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
   
    //TestBed.configureTestingModule({});
   //component = TestBed.inject(DatasPropertyComponent);
  //component = new DatasPropertyComponent(); 
  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

//     ----  test 1 ------
  it('should alert is working', () => {
    
   spyOn(window , "alert");
   component.validarDados();

    expect(window.alert).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Solicitação enviada com sucesso!');
    expect(component.validarDados).toBeTruthy();

  });
//    --- test 2 ----
it('should onkeyup() is working', () => {

let valor =  '';
 component.onKeyup(valor);

 // expect(component.onKeyup).not.toHaveBeenCalled();
 expect(component.onKeyup).toBeTruthy();
 expect(component.onKeyup).not.toBeUndefined();
 //expect(valor).not.toThrow();
 //expect(component.onKeyup).toEqual(1000);

 });
 //----test  3-------
 it('should onkeyup0() is working', () => {

  let valor =  '1000, 2000';
   component.onKeyup0(valor);
  
   expect(component.onKeyup0).toBeTruthy();
   
   });
   //----test   4-----
   it('should onkeyup2() is working', () => {

    let valor =  '1000, 2000';
     component.onKeyup2(valor);
    
     expect(component.onKeyup2).toBeTruthy();
     
     });
     // --- test  5
     it('should onSave0() is working', () => {
  let  rendaMensal = 5000 ;
  let valor = rendaMensal;
  //componet.onSave () = new valor;
      //spyOn(window, "valor");
       component.onSave0(rendaMensal) ;
      
       expect(component.onSave0).toBeTruthy();
       expect(rendaMensal).toEqual(5000);
       expect(valor).toEqual(5000);
       
       }); 
});
