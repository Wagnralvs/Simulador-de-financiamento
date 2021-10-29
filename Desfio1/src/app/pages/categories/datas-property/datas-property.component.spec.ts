import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, NgForm , FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule} from 'ngx-mask';

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
  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  //     test 1
  /*it('should create', () => {
    fixture.componentInstance.onSave0
    expect(component.onSave0()).toBeFalse();
  });  */
//       test 1
  it('should alert is working', () => {
    
   spyOn(window , "alert");
   component.validarDados();

    expect(window.alert).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Solicitação enviada com sucesso!');
    expect(component.validarDados).toBeTruthy();

  });
//     test 2 
it('should alert is working', () => {
    
//  spyOn(window , "submitted");
 component.onKeyup;

  //expect(component.onKeyup).toHaveBeenCalled();
 // expect(component.onKeyup).toBeTruthy();

 });
});
