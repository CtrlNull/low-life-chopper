import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeadingsComponent } from './home-headings.component';

describe('HomeHeadingsComponent', () => {
  let component: HomeHeadingsComponent;
  let fixture: ComponentFixture<HomeHeadingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeHeadingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHeadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
