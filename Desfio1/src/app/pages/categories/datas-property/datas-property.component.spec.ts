import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasPropertyComponent } from './datas-property.component';

describe('DatasPropertyComponent', () => {
  let component: DatasPropertyComponent;
  let fixture: ComponentFixture<DatasPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatasPropertyComponent ]
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
