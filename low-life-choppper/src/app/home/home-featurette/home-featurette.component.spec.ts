import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFeaturetteComponent } from './home-featurette.component';

describe('HomeFeaturetteComponent', () => {
  let component: HomeFeaturetteComponent;
  let fixture: ComponentFixture<HomeFeaturetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFeaturetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFeaturetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
