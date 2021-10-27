import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, NgForm , FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DatasPropertyService } from './shared/datas-property-service';
import { DatasPropertyComponent } from './datas-property.component';

describe('DatasPropertyComponent', () => {
  let component: DatasPropertyComponent;
  let fixture: ComponentFixture<DatasPropertyComponent>;

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
