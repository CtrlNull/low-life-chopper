import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastJumbotronComponent } from './podcast-jumbotron.component';

describe('PodcastJumbotronComponent', () => {
  let component: PodcastJumbotronComponent;
  let fixture: ComponentFixture<PodcastJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
