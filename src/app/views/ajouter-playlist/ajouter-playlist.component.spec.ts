import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPlaylistComponent } from './ajouter-playlist.component';

describe('AjouterPlaylistComponent', () => {
  let component: AjouterPlaylistComponent;
  let fixture: ComponentFixture<AjouterPlaylistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterPlaylistComponent]
    });
    fixture = TestBed.createComponent(AjouterPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
