import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, NgForm , FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DatasPropertyService } from './shared/datas-property-service';
import { DatasPropertyComponent } from './datas-property.component';

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
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
   
  //component = new DatasPropertyComponent(); 
  
    //testes
   //parcela = TestBed.createComponent(DatasPropertyComponent);
  //let parcela = new DatasPropertyComponent();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should st submitted to true', () => {
    fixture.componentInstance.parcelas;
    let total = fixture.componentInstance.parcelas

    expect(fixture.componentInstance.parcelas).toBeTruthy();

    expect(component).toBeTruthy();
  });
  //    test 3
  /*it('should create', () => {
    fixture.componentInstance.onSave0
    expect(component.onSave0()).toBeFalse();
  });  */

});
