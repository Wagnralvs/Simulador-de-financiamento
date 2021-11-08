import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultReprovadoComponent } from './result-reprovado.component';

describe('ResultReprovadoComponent', () => {
  let component: ResultReprovadoComponent;
  let fixture: ComponentFixture<ResultReprovadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultReprovadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultReprovadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
