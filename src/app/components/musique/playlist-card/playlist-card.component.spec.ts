import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistCardComponent } from './playlist-card.component';

describe('PlaylistCardComponent', () => {
  let component: PlaylistCardComponent;
  let fixture: ComponentFixture<PlaylistCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaylistCardComponent]
    });
    fixture = TestBed.createComponent(PlaylistCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
