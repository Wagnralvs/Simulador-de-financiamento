import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideRoutes, Router } from '@angular/router';
import { DatasComponent } from './datas.component';



describe('DadasComponent', () => {
  let component: DatasComponent;
  let fixture: ComponentFixture<DatasComponent>;

  const spyRouter = jasmine.createSpyObj("spyRouter",
  ["navigate"])

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatasComponent ],
      imports: [ FormsModule, ReactiveFormsModule ],
      providers:[FormBuilder,
      { provide : Router, useValue: spyRouter}],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents().then(()=>{
      fixture = TestBed.createComponent(DatasComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
   
  });

  beforeEach(() => {
   // fixture = TestBed.createComponent(DatasComponent);
   // component = fixture.componentInstance;
  //  fixture.detectChanges();
 // onSubmit = new onSubmit();
  });



  //test 2
  xit('should call submitted function',() => {
 
  spyOn(component, 'onSubmit').and.callThrough();
     component.onSubmit();
    
    expect(component.onSubmit).toHaveBeenCalled();

  });

//test 3
it('should set submitted to true this', () => {
  
  component.onSubmit();

  expect(component.onSubmit).toMatch('alert');

});
//     test   4
xit('should alert is working', () => {
    


   expect(component.onSubmit).toHaveBeenCalled();
  // expect(component.ngOnInit).toMatch('this.formulario');
   expect(component.ngOnInit).toBeTruthy();

 });



});
