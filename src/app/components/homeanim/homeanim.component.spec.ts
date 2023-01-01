import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeanimComponent } from './homeanim.component';

describe('HomeanimComponent', () => {
  let component: HomeanimComponent;
  let fixture: ComponentFixture<HomeanimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeanimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeanimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
