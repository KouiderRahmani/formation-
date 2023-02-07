import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigupFormComponent } from './sigup-form.component';

describe('SigupFormComponent', () => {
  let component: SigupFormComponent;
  let fixture: ComponentFixture<SigupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigupFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
