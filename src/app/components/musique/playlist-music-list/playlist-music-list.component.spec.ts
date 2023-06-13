import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistMusicListComponent } from './playlist-music-list.component';

describe('PlaylistMusicListComponent', () => {
  let component: PlaylistMusicListComponent;
  let fixture: ComponentFixture<PlaylistMusicListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaylistMusicListComponent]
    });
    fixture = TestBed.createComponent(PlaylistMusicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
