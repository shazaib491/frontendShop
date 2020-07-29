import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JssorComponent } from './jssor.component';

describe('JssorComponent', () => {
  let component: JssorComponent;
  let fixture: ComponentFixture<JssorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JssorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JssorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
