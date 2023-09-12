import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyWebComponent } from './body-web.component';

describe('BodyWebComponent', () => {
  let component: BodyWebComponent;
  let fixture: ComponentFixture<BodyWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyWebComponent]
    });
    fixture = TestBed.createComponent(BodyWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
