import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseAngularAndTypescripteComponent } from './base-angular-and-typescripte.component';

describe('BaseAngularAndTypescripteComponent', () => {
  let component: BaseAngularAndTypescripteComponent;
  let fixture: ComponentFixture<BaseAngularAndTypescripteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseAngularAndTypescripteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseAngularAndTypescripteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
