import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesPlaylistsComponent } from './mes-playlists.component';

describe('MesPlaylistsComponent', () => {
  let component: MesPlaylistsComponent;
  let fixture: ComponentFixture<MesPlaylistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesPlaylistsComponent]
    });
    fixture = TestBed.createComponent(MesPlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
