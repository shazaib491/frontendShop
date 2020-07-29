import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackFormComponent } from './back-form.component';

describe('BackFormComponent', () => {
  let component: BackFormComponent;
  let fixture: ComponentFixture<BackFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
