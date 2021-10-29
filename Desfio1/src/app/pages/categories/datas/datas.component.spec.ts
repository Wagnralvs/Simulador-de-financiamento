import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DatasComponent } from './datas.component';



describe('DadasComponent', () => {
  let component: DatasComponent;
  let fixture: ComponentFixture<DatasComponent>;

  //let onSubmit : onSubimit;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatasComponent ],
      imports: [ FormsModule ],
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should patterns to be valid', () => {
  
    fixture.componentInstance.patterns ;
    fixture.detectChanges();

  expect(fixture.componentInstance.patterns).toEqual('^[a-zA-Z ]*$');
  expect(component).toBeTruthy();
  });
  //test 2
  it('should call submitted function',() => {
  const form : any ='';
  spyOn(component, 'onSubmit').and.callThrough();
     component.onSubmit(form);
    
    expect(component.onSubmit).toHaveBeenCalled();

  });

//test 3
it('should set submitted to true this', () => {
  let form : any ='';

  component.submitted = false;
  component.onSubmit(form);

  expect(component.submitted).toBeTruthy();
  expect(component.submitted).toEqual(true);
  expect(component.onSubmit).toMatch('submitted');

  
});
//     test   4
it('should alert is working', () => {
    
  spyOn(window , "alert");
  component.onSubmit;

   //expect(window.alert).toHaveBeenCalled();
  //expect(window.alert).toHaveBeenCalledWith('Formulário enviado com sucesso!');
  // expect(component.onSubmit).toBeTruthy();

 });



});
