import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableColorsComponent } from './table-colors.component';

describe('TableColorsComponent', () => {
  let component: TableColorsComponent;
  let fixture: ComponentFixture<TableColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
