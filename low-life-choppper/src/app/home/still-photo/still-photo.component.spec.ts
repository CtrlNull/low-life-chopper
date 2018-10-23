import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StillPhotoComponent } from './still-photo.component';

describe('StillPhotoComponent', () => {
  let component: StillPhotoComponent;
  let fixture: ComponentFixture<StillPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StillPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StillPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
