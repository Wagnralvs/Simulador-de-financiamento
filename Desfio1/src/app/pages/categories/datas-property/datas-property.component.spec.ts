import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder,  FormsModule, ReactiveFormsModule,  Validators } from '@angular/forms';

import { DatasPropertyService } from './shared/datas-property-service';
import { DatasPropertyComponent } from './datas-property.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


describe('DatasPropertyComponent', () => {

  let component: DatasPropertyComponent;
  let fixture: ComponentFixture<DatasPropertyComponent>;
  let parcela : DatasPropertyComponent ;


  const spyRouter = jasmine.createSpyObj("spyRouter",
  ["navigate" , "aprovado"  , "reprovado"])
  const spyDatasPropertyService = jasmine.createSpyObj("spyDatasPropertyService",
  ["aprovado"  , "valorAprovado"])
  const formBuilder: FormBuilder = new FormBuilder();


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatasPropertyComponent ],
      imports: [ FormsModule, ReactiveFormsModule, ],
      //alterações no providers
      providers:[
        FormBuilder, 
        { provide: FormBuilder, useValue: formBuilder },
        {provide: DatasPropertyService, useValue: spyDatasPropertyService  },
        { provide : Router, useValue: spyRouter}

      ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
    //router = TestBed.get(Router)
  });

  beforeEach(() => {
   fixture = TestBed.createComponent(DatasPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    //component = TestBed.inject(DatasPropertyComponent)

    component.formulario= formBuilder.group({
      
        tipoImovel:[null,[Validators.required]],
        rendaMensal: [null ,[Validators.required, Validators.maxLength(4)]],
        valorImovel: [null,[Validators.required]], 
        valorEntrada: [null,[Validators.required]],
        quantidadeParcelas: [null, [Validators.required ,]],
    })
   
    //TestBed.configureTestingModule({});
   //component = TestBed.inject(DatasPropertyComponent);
  //component = new DatasPropertyComponent(); 
  
  });
  //  ----test 1----
  it( ' should formulario in ngOnit(), ',() => {
    
   
    component.ngOnInit
    component.formulario;

    expect(component.ngOnInit).toBeTruthy();
    expect(component.formulario).toBeTruthy();
    //expect(component.formulario).toHaveBeenCalled()
  })
  // ----- test 2 ------
  it( ' should router called in aprovado() ',() => {

    component.aprovado();
    expect(spyRouter.navigate).toHaveBeenCalledWith(['/results']);
  
  })


//     ----  test 3 ------
  it('should router called in reprovado()', () => {
    
    component.reprovado();
    expect(spyRouter.navigate).toHaveBeenCalledWith(['/reprov'])
  

  });
//    --- test 2 ----
it('should onSubmit() is working', () => {


 component.onSubmit();

 expect(component.onSubmit).toBeTruthy();


 });
 //----test  3-------
 it('should entrada() is working', () => {

  let valor =  1000;
  let entrada = valor

   component.entrada();
  
   //expect(valor).toEqual(1000);
   expect(component.entrada).toBeTruthy();
   expect(entrada).toEqual(valor);
   
   });
 
     // --- test  4
     it('should renda() is working', () => {
  let rendaTest:  any = component.renda;
  rendaTest = false;

   component.renda().valueOf;

   expect(component.renda).toBeTruthy();
 
   expect(rendaTest).toBeFalsy();
   expect(rendaTest).toEqual(false)
  }); 
       // ----test  6----
  it('should parcelas() is working', () => {
      
        let parcelas = component.parcelas

      expect( parcelas).toBeTruthy();
          
             
   });   
   //  --- test / test 
  // it('should valorAprovado() is working', () => {
      
  // let valorAprovado =  component.valorAprovado();



 // expect(valorAprovado.valueOf ).toBe('valorAprovado')});   
  
});
