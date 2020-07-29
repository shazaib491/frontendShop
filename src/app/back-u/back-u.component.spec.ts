import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackUComponent } from './back-u.component';

describe('BackUComponent', () => {
  let component: BackUComponent;
  let fixture: ComponentFixture<BackUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
