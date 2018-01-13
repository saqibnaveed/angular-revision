import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPrinterComponent } from './input-printer.component';

describe('InputPrinterComponent', () => {
  let component: InputPrinterComponent;
  let fixture: ComponentFixture<InputPrinterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPrinterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
