import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoollowersComponent } from './foollowers.component';

describe('FoollowersComponent', () => {
  let component: FoollowersComponent;
  let fixture: ComponentFixture<FoollowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoollowersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
