import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistButtonsComponent } from './playlist-buttons.component';

describe('PlaylistButtonsComponent', () => {
  let component: PlaylistButtonsComponent;
  let fixture: ComponentFixture<PlaylistButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaylistButtonsComponent]
    });
    fixture = TestBed.createComponent(PlaylistButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
