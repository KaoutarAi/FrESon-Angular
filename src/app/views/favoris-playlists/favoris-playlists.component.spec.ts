import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorisPlaylistsComponent } from './favoris-playlists.component';

describe('FavorisPlaylistsComponent', () => {
  let component: FavorisPlaylistsComponent;
  let fixture: ComponentFixture<FavorisPlaylistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavorisPlaylistsComponent]
    });
    fixture = TestBed.createComponent(FavorisPlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
