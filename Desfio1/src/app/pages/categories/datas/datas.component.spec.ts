import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  Router } from '@angular/router';
import { DatasComponent } from './datas.component';



describe('DadasComponent', () => {
  let component: DatasComponent;
  let fixture: ComponentFixture<DatasComponent>;
  let fb: FormBuilder;

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
   
  });



//test 1
it('should alert to be call', () => {
  spyOn(window , 'alert');
  component.onSubmit();

  expect(window.alert).toHaveBeenCalledWith('Formulário enviado com sucesso!')

});



});
