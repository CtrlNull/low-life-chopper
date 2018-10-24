import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeThumbnailComponent } from './home-thumbnail.component';

describe('HomeThumbnailComponent', () => {
  let component: HomeThumbnailComponent;
  let fixture: ComponentFixture<HomeThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
