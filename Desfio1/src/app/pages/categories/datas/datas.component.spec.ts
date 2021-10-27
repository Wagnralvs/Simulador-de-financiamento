import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DatasComponent } from './datas.component';

describe('DadasComponent', () => {
  let component: DatasComponent;
  let fixture: ComponentFixture<DatasComponent>;

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should patterns to be valid', () => {
    //test 
    fixture.componentInstance.patterns ;
    fixture.detectChanges();

  expect(fixture.componentInstance.patterns).toEqual('^[a-zA-Z ]*$');
  // 
    expect(component).toBeTruthy();
  });
  it('should set submitted to true',() => {

   //fixture.componentInstance.onSubmit ;
component.onSubmit;
    //fixture.detectChanges();

    expect(component.onSubmit).toBeTruthy();

  });



});
